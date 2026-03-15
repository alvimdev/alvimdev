import nodemailer from "nodemailer";

interface MailInput {
    name: string;
    email: string;
    message: string;
}

const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: Number(import.meta.env.SMTP_PORT),
    secure: true,
    auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
    },
});

export async function sendContactMail({
    name,
    email,
    message,
}: MailInput) {
    const html = `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0812;padding:40px 20px;">
            <tr>
            <td align="center">
                <table width="560" cellpadding="0" cellspacing="0" style="background:#12101e;border-radius:16px;border:1px solid #3d2d70;overflow:hidden;">

                <!-- header -->
                <tr>
                    <td style="background:linear-gradient(135deg,#1e1630,#2d1f55);padding:32px 40px;border-bottom:1px solid #3d2d70;">
                    <p style="margin:0;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#9b7fe8;opacity:0.7;">Portfólio — Novo contato</p>
                    <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#f0ecff;letter-spacing:-0.02em;">
                        Mensagem de ${name}
                    </h1>
                    </td>
                </tr>

                <!-- body -->
                <tr>
                    <td style="padding:32px 40px;">

                    <!-- meta -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #3d2d7050;">
                            <span style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9b7fe8;opacity:0.5;">De</span><br/>
                            <span style="font-size:14px;color:#c4b8e8;margin-top:4px;display:block;">${name}</span>
                        </td>
                        </tr>
                        <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #3d2d7050;">
                            <span style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9b7fe8;opacity:0.5;">Email</span><br/>
                            <a href="mailto:${email}" style="font-size:14px;color:#9b7fe8;margin-top:4px;display:block;text-decoration:none;">${email}</a>
                        </td>
                        </tr>
                    </table>

                    <!-- message -->
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#9b7fe8;opacity:0.5;">Mensagem</p>
                    <div style="background:#1e1630;border:1px solid #3d2d70;border-radius:10px;padding:20px 24px;">
                        <p style="margin:0;font-size:15px;line-height:1.75;color:#c4b8e8;white-space:pre-wrap;">${message}</p>
                    </div>

                    <!-- reply cta -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                        <tr>
                        <td align="center">
                            <a href="mailto:${email}?subject=Re: Contato via portfólio"
                            style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7c5cbf,#a07ae0);color:#f5f0ff;font-size:14px;font-weight:600;text-decoration:none;border-radius:100px;">
                            Responder ${name}
                            </a>
                        </td>
                        </tr>
                    </table>

                    </td>
                </tr>

                <!-- footer -->
                <tr>
                    <td style="padding:20px 40px;border-top:1px solid #3d2d7050;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#c4b8e8;opacity:0.3;">
                        alvim.is-a.dev · ${new Date().getFullYear()}
                    </p>
                    </td>
                </tr>

                </table>
            </td>
            </tr>
        </table>
    `;

    return transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: import.meta.env.SMTP_USER,
        replyTo: email,
        subject: `Contato via portfólio — ${name}`,
        text: `De: ${name} <${email}>\n\n${message}`,
        html,
    });
}