const nodemailer = require('nodemailer')

class MailService {

    async sendActivationMail(to, link) {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.mail.ru",
                port: 465,
                secure: true,
                auth: {
                    user: 'soninnomok@mail.ru',
                    pass: 'y7F8pmhsWa4kSukqQHLW'
                },
            });

            let info = await transporter.sendMail({
                from: 'soninnomok@mail.ru',
                to: to,
                subject: "Hi",
                text: "Podtverdi akaynt",
                html: `
                    <div>
                        <b>Activation url</b><br>
                        <a href="${link}">${link}</a>
                    </div>`
            });
        } catch (e) {
        }
    }

    async sendRemovePasswordMail(to, link) {
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: 'soninnomok@mail.ru',
                pass: 'y7F8pmhsWa4kSukqQHLW'
            },
        });

        let info = await transporter.sendMail({
            from: 'soninnomok@mail.ru', 
            to: to,
            subject: "Hi", 
            text: "Для востановления пароля перейлите по ссылки", 
            html: `
                <div>
                    <b>Link for remove password</b>, 
                    <a href="${link}">${link}</a>
                </div>`
        });
    }

}
module.exports = new MailService();