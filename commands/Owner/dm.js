const { MessageEmbed } = require('discord.js');
let settings = require(`../../botconfig/settings.json`);
const ee = require("../../botconfig/embed.json");

module.exports = {
    name: 'dm',
  
    description: 'bot can sent message to all members by this command',
    useage: '',
    accessableby: "",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     alloweduserids: settings.ownerIDS,
    run: async (client, message, args) => {
        const memberss = await message.guild.members.fetch({force: true})
        if (!args.slice(0).join(" "))
        return message.channel.send("**You did not specify your message**");

        memberss.forEach(comps => {
    if(comps.user.bot===true)return;
    try{
    comps.user.send(args.slice(0).join(" "))
    }catch(e){

    }

})
  message.reply(`successfully send **${args.slice(0).join(" ")}** to all members in the guild`)        

    }
}