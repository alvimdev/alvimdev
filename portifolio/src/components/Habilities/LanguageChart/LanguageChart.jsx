// LanguageChart.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './LanguageChart.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const LanguageChart = ({ username }) => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const languages = {};
        fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
            }
        })
            .then(res => res.json())
            .then(repos => {
                const languagePromises = repos.map(repo =>
                    fetch(repo.languages_url, {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
                        }
                    })
                        .then(res => res.json())
                        .then(repoLangs => {
                            for (const [lang, bytes] of Object.entries(repoLangs)) {
                                languages[lang] = (languages[lang] || 0) + bytes;
                            }
                        })
                );

                return Promise.all(languagePromises);
            })
            .then(() => {
                const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0);

                const languagePercentages = {};
                for (const [lang, bytes] of Object.entries(languages)) {
                    const percentage = (bytes / totalBytes) * 100;
                    if (percentage > 1) { // Filtrando linguagens com mais de 1%
                        languagePercentages[lang] = percentage.toFixed(2);
                    }
                }

                setChartData({
                    labels: Object.keys(languagePercentages),
                    datasets: [{
                        data: Object.values(languagePercentages),
                        backgroundColor: [
                            'rgb(255, 206, 86)',
                            'rgb(255, 99, 132)',
                            'rgb(153, 102, 255)',
                            'rgb(54, 162, 235)',
                            'rgb(75, 192, 192)',
                            'rgb(255, 159, 64)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 206, 86)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)',
                            'rgb(75, 192, 192)'
                        ],
                        borderWidth: .5
                    }]
                });
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [username]);

    return (
        <div className={styles.language_chart}>
            { loading ? (
                <div className={styles.loading}></div>
            ) : (
                <Bar
                    data={chartData}
                    options={{
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true,
                                grid: {
                                    display: true,
                                    color: '#c0c0c000'
                                },
                                ticks: {
                                    font: {
                                        weight: 500,
                                        size: 12
                                    },
                                    color: '#C0C0C0'
                                }
                            },
                            y: {
                                grid: {
                                    display: true,
                                    color: '#c0c0c000' 
                                },
                                ticks: {
                                    font: {
                                        weight: 500,
                                        size: 12
                                    },
                                    color: '#C0C0C0' 
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false,
                            }
                        }
                    }}
                />
            )}
        </div>
    );
};
