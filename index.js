require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent 
    ]
});

// データ定義（キャラクター追加はここだけ編集すればよい）
const REACTIONS = [
    {
        keyword: 'ポムケン',
        responses: [
            { content: 'ポムムワン！', files: ['./pomuken.png'], weight: 95 },
            { content: 'うお（笑）俺じゃなかったか（笑）', files: ['./ハブロウ.png'], weight: 5 },
        ],
    },
    {
        keyword: 'パモ',
        responses: [
            { content: 'パモはいないよ……何言ってんの……' },
            { content: 'パモモ！', files: ['./pamo.png'] },
        ],
    },
    {
        keyword: 'タケシ',
        responses: [
            { content: '今忙しいからあとにして。' },
            { content: 'なに？', files: ['./タケシ1.jpg'] },
            { content: 'ジャンケンしようぜ！俺はグー！', files: ['./タケシ2.png'] },
        ],
    },
    {
        keyword: 'マサト',
        responses: [
            { content: '勉強してるから後にしてよ……' },
            { content: 'マサト！', files: ['./マサト.png'] },
        ],
    },
    {
        keyword: 'オザケン',
        responses: [
            { content: 'オザケン！', files: ['./オザケン.jpg'] },
        ],
    },
];

// === 重み付きランダム抽選（weight 省略時は 1 として扱う＝均等抽選） ===
function pickWeighted(responses) {
    const total = responses.reduce((sum, r) => sum + (r.weight ?? 1), 0);
    let rand = Math.random() * total;
    for (const r of responses) {
        rand -= r.weight ?? 1;
        if (rand < 0) return r;
    }
    return responses[responses.length - 1];
}

client.once('ready', () => {
    console.log(`${client.user.tag} としてログインしました`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const reaction = REACTIONS.find(r => message.content.includes(r.keyword));
    if (!reaction) return;

    message.channel.send(pickWeighted(reaction.responses))
        .catch(err => console.error('送信に失敗しました:', err));
});

// コードに直接書かず、.envファイルからトークンを読み込む
client.login(process.env.DISCORD_TOKEN);
