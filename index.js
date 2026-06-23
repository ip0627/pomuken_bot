// .envファイルから環境変数を読み込む設定
require('dotenv').config();
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

    if (message.content.includes('ポムケン')) {
        message.channel.send('ポムムワン！');
        // 同じフォルダ内の画像を相対パスで指定
        message.channel.send({ files: ["./pomuken.png"] });
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
    
    if(message.content.includes('タケシ')) {
        message.channel.send('なに？');
        message.channel.send({ files: ["./タケシ1.jpg"] });
    }
});

// コードに直接書かず、.envファイルからトークンを読み込む
client.login(process.env.DISCORD_TOKEN);