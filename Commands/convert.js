module.exports = {
    name: 'convert',
    description: "Converts from imperial to metric or vice versa",
    execute(Client, message, args, Discord, cmd){
        let number = args[0].match(/(\d+.?\d+)/g)
            switch (args[1].toLowerCase()) {
                case 'f': message.channel.send(`${parseFloat(number*9/5+32).toFixed(3).replace(/[.,]000$/, "")}°F`) // C to F
                    {break;} 
                case 'c': message.channel.send(`${parseFloat((number-32)*5/9).toFixed(3).replace(/[.,]000$/, "")}°C`) // F to C
                    {break;}
                case `in`: message.channel.send(`${parseFloat(number/2.54).toFixed(3).replace(/[.,]000$/, "")}'`) // Cm to In
                    {break;}
                case 'cm': message.channel.send(`${parseFloat(number*2.54).toFixed(3).replace(/[.,]000$/, "")}Cm`) // In to Cm
                    {break;}
                case `ft`: message.channel.send(`${parseFloat(number*3.281).toFixed(3).replace(/[.,]000$/, "")}"`) // M to Ft
                    {break;}
                case 'm': message.channel.send(`${parseFloat(number/3.281).toFixed(3).replace(/[.,]000$/, "")}M`) // Ft to M
                    {break;}
                case 'mi': message.channel.send(`${parseFloat(number/1.609).toFixed(3).replace(/[.,]000$/, "")}Mi`) // Km to Mi
                    {break;}
                case 'km': message.channel.send(`${parseFloat(number*1.609).toFixed(3).replace(/[.,]000$/, "")}Km`) // Mi to Km
                    {break;}
                case 'lb': message.channel.send(`${parseFloat(number*2.205).toFixed(3).replace(/[.,]000$/, "")}Lb`) // Kg to Lb
                    {break;}
                case 'kg': message.channel.send(`${parseFloat(number/2.205).toFixed(3).replace(/[.,]000$/, "")}Kg`) // Lb to Kg
                    {break;}
                case 'gal': message.channel.send(`${parseFloat(number/3.785).toFixed(3).replace(/[.,]000$/, "")}Gal`) // L to Gal
                    {break;}
                case 'l': message.channel.send(`${parseFloat(number*3.785).toFixed(3).replace(/[.,]000$/, "")}L`) // Gal to L
                    {break;}
            
        }
            
    }
}