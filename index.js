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
        message.channel.send({ files: ["C:\\Users\\ip062\\Desktop\\pomuken_bot\\pomuken.png"] });
    }

    // 「パモ」と入力された際の処理
    if (message.content.includes('パモ')) {
        // ランダムに実行したい処理（メッセージや画像）を配列にまとめる
        const responses = [
            { content: 'パモはいないよ……何言ってんの……' }, // テキストのみ
            { content: 'パモモ！', files: ["C:\\Users\\ip062\\Desktop\\pomuken_bot\\pamo.png"] }, // テキスト＋画像
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        const selectedResponse = responses[randomIndex];
        message.channel.send(selectedResponse);
    }
    
    if(message.content.includes('タケシ')) {
        message.channel.send('なに？');
        message.channel.send({ files: ["C:\\Users\\ip062\\Desktop\\pomuken_bot\\タケシ1.jpg"] });
    }
});

// Botのトークンを使用してログインする
client.login('MTUxMjE2ODc5MzcxNDA2OTUzNA.GCCtnP.MaqZ_rSPN6e0fAstgUScuuVPOFh-i3q5ZLtmvY');