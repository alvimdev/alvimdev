import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import styles from './Projects.module.css';

export function Projects() {
    const repos = [
        { 
            title: 'FeedUp', 
            img: '/feedup.png', 
            desc: 'O FeedUp é uma comunidade para trocas de feedbacks entre colaboradores de uma empresa, com os objetivos de aumentar o engajamento dos funcionários, a produtividade e melhorar as taxas de retenção da empresa. Revelando percepções no trabalho que não poderiam ser encontradas de forma rápida em nenhum outro lugar, este projeto implementa tanto um website quanto um app mobile para o FeedUp.', 
            link: 'https://github.com/FeedUp-Hub/' 
        },
        { 
            title: 'CashCraft', 
            img: '/cash-craft.png', 
            desc: 'Projeto de solução financeira referente à disciplina de Trabalho Interdisciplinar: Aplicações Web. Este oferece ferramentas intuitivas para controle de finanças pessoais, permitindo acompanhar gastos e receitas em tempo real, elaborar planos financeiros personalizados e obter relatórios detalhados para uma gestão financeira eficaz.', 
            link: 'https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2024-1-ti1-0385100-dificuldade-em-gerenciar-financas-g1' 
        },
        { 
            title: 'Node Invaders', 
            img: '/nodein.png', 
            desc: 'Node Invaders é um projeto pessoal inspirado no clássico Space Invaders, mas com alguns diferenciais e melhorias adicionais. Este jogo oferece uma experiência renovada e envolvente, combinando elementos tradicionais com novas funcionalidades. Desafie-se e divirta-se enquanto enfrenta ondas de inimigos em um ambiente reimaginado e repleto de ação.', 
            link: 'https://github.com/alvimdev/node-invaders' 
        }
    ];

    return (
        <section className={styles.projects}>
            <h3>Projetos Destaque</h3>
            <div className={styles.repositories}>
                {
                    repos.map((repo, index) => (
                        <article key={index} id={`repo-${index}`} className={styles.repo_card}>
                            <img src={repo.img} alt={repo.title} />
                            <div className={styles.repo_info}>
                                <h4>{repo.title}</h4>
                                <p>{repo.desc}</p>
                                <a className={styles.github_link} href={repo.link} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                    <DiGithubBadge className={styles.github_icon} />
                                </a>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}
