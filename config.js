module.exports = {
    app: {
        px: 'ke.',
        token: 'OTIwOTU1NjcwODIyNTM1MTg5.Ybr4zg.gOtIG9r5dH0FJhDvP9ED7WbaYm8',
        playing: 'đùa với ke mặt lồn'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
