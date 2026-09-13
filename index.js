require('dotenv').config();
// 以下の1行を追加（トークンの最初の5文字だけを画面に表示して確認する）
console.log("読み込んだトークン:", process.env.DISCORD_TOKEN ? process.env.DISCORD_TOKEN.substring(0, 5) + "..." : "読み込めていません");

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent 
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} としてログインしました`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    // 「ポムケン」と入力されたときの処理
    if (message.content.includes('ポムケン')) {
        const rateofHaburouResponses = 0.05;
        const isHaburou = Math.random() < rateofHaburouResponses;
        const selectedResponse = isHaburou
            ? { content: 'うお（笑）俺じゃなかったか（笑）', files: ["./ハブロウ.png"] }
            : { content: 'ポムムワン！', files: ["./pomuken.png"] };

        message.channel.send(selectedResponse);
    }

    // 「パモ」と入力された際の処理
    if (message.content.includes('パモ')) {
        const responses = [
            { content: 'パモはいないよ……何言ってんの……' },
            { content: 'パモモ！', files: ["./pamo.png"] },
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        const selectedResponse = responses[randomIndex];
        message.channel.send(selectedResponse);
    }

    // 「タケシ」と入力された際の処理
    if (message.content.includes('タケシ')) {
        const responses = [
            { content: '今忙しいからあとにして。' },
            { content: 'なに？', files: ["./タケシ1.jpg"] },
            { content: 'ジャンケンしようぜ！俺はグー！', files: ["./タケシ2.png"] },
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        const selectedResponse = responses[randomIndex];
        message.channel.send(selectedResponse);
    }

    // 「マサト」と入力された際の処理
    if (message.content.includes('マサト')) {
        const responses = [
            { content: '勉強してるから後にしてよ……' },
            { content: 'マサト！', files: ["./マサト.png"] },
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        const selectedResponse = responses[randomIndex];
        message.channel.send(selectedResponse);
    }

    // 「オザケン」と入力された際の処理
    if (message.content.includes('オザケン')) {
        message.channel.send({ content: 'オザケン！', files: ["./オザケン.jpg"] });
    }

   // 「脳波」または「うんち」が入力された際の処理
    if (message.content.includes('脳波') || message.content.includes('うんち')) {
        message.channel.send({ content: 'やめろそこは、、、', files: ['./やめろそこは.jpg'] });
    }

});

// コードに直接書かず、.envファイルからトークンを読み込む
client.login(process.env.DISCORD_TOKEN);
// リポジトリへのアクセストークン：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

