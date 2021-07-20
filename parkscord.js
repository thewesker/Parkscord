// include the Themeparks and Discord library
const ThemeParks = require("themeparks");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;


const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


// Parks
const Parks = {};
for (const park in ThemeParks.Parks) {
  Parks[park] = new ThemeParks.Parks[park]();
}
//const KI = new ThemeParks.Parks.KingsIsland();
//const CP = new ThemeParks.Parks.CedarPoint();
//const DAK = new ThemeParks.Parks.WaltDisneyWorldAnimalKingdom;
//const SFMM = new ThemeParks.Parks.SixFlagsMagicMountain;
// Test with Discord
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var goodchannel = "bot_commands";
client.on('message', msg => {
if (msg.channel.name !== goodchannel)
	return;
else {
  if (!msg.content.startsWith(prefix)) return;
  	console.log('Message received');
  	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'ki') {
		console.log('!q ki command');
		var selectedpark = Parks.KingsIsland;
	} else if (command === 'cp') {
		console.log('!q cp command');
		var selectedpark = Parks.CedarPoint;
	} else if (command === 'dak') {
		console.log('!q dak command');
		var selectedpark = Parks.WaltDisneyWorldAnimalKingdom; 
	} else if (command === 'sfmm') {
		console.log('!q sfmm command');
		var selectedpark = Parks.SixFlagsMagicMountain;
	} else if (command === 'dhs') {
		console.log('!q dhs command');
		var selectedpark = Parks.WaltDisneyWorldHollywoodStudios;
	} else if (command === 'dl') {
		console.log('!q dl command');
		var selectedpark = Parks.DisneylandResortMagicKingdom;
	} else if (command == 'caro') {
		console.log('!q caro command')
		var selectedpark = Parks.Carowinds;
	} else if (command === 'bgt') {
		console.log('!q bgt command')
		var selectedpark = Parks.BuschGardensTampa;
	} else if (command === 'sfgradv') {
		console.log('!q sfgradv command')
		var selectedpark = Parks.SixFlagsGreatAdventure;
	} else if (command === 'sfot') {
		console.log('!q sfot command')
		var selectedpark = Parks.SixFlagsOverTexas;
	} else if (command === 'kbf' || command === 'knotts') {
		console.log('!q kbf command')
		var selectedpark = Parks.KnottsBerryFarm;
	} else if (command === 'cga') {
		console.log('!q cga command')
		var selectedpark = Parks.CaliforniasGreatAmerica;
	} else if (command === 'cw') {
		console.log('!q cw command')
		var selectedpark = Parks.CanadasWonderland;
	} else if (command === 'sfgam') {
		console.log('!q sfgam command')
		var selectedpark = Parks.SixFlagsGreatAmerica;
	}	
		// sleep(5000).then(() => {
	else {
		msg.reply(command + ' is not available yet.')
		return;
	}
	console.log(selectedpark);
const CheckWaitTimes = () => {
    selectedpark.GetWaitTimes().then((rideTimes) => {
    	const embed = new Discord.MessageEmbed()

				.setTitle(selectedpark.Name + ' Queue Times')
		const rides = (rideTimes.length);
		console.log(rideTimes.length);
		if (rideTimes.length <= 25) {
        rideTimes.forEach((ride) => {
        	if (ride.status = 'Operating') {
        		if (ride.waitTime == null) {
        			embed.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        		} else {
        	embed.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
        }
        } else {
        		
        	embed.addField(ride.name + ' (' + ride.status + ')', true);
        	console.log(ride.name + ' (' + ride.status + ') ');
        }
        });
         msg.reply(embed);
    	}
    	else if ((rideTimes.length > 25) && (rideTimes.length < 50)) {
    	rideTimes.slice(0, 25).forEach((ride) => {
	       if (ride.status == 'Operating') {
	       		if (ride.waitTime == null) {
        			embed.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        		} else {
	        	embed.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
	        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
	        }
	        } else {
	        	
	        	embed.addField(ride.name + ' (' + ride.status + ')', 'Closed');
	        	console.log(ride.name + ' (' + ride.status + ') ');
	        };
       
				
				embed.setTitle(selectedpark.Name + ' Queue Times')
				});
	  const embed2 = new Discord.MessageEmbed()
	  .setTitle(selectedpark.Name + ' Queue Times')
        rideTimes.slice(26, rides).forEach((ride) => {

       if (ride.status == 'Operating') {
       			if (ride.waitTime == null) {
        			embed2.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        		} else {
	        	embed2.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
	        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
	        }
	        } else {
	        	
	        	embed2.addField(ride.name + ' (' + ride.status + ')', 'Closed');
	        	console.log(ride.name + ' (' + ride.status + ') ');
	        };
	        
        console.log(rideTimes.length);
        
       	//sleep(5000).then(() => {
       	
  }) 
    
    	msg.reply(embed);
        msg.reply(embed2);
    }
    	else if ((rideTimes.length > 50) && (rideTimes.length < 75)) {
    	rideTimes.slice(0, 25).forEach((ride) => {
        if (ride.status == 'Operating') {
	       		if (ride.waitTime == null) {
        			embed.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        		} else {
	        	embed.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
	        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
	        }
	        } else {
	        	
	        	embed.addField(ride.name + ' (' + ride.status + ')', 'Closed');
	        	console.log(ride.name + ' (' + ride.status + ') ')};
        });
        embed.setTitle(selectedpark.Name + ' Queue Times')
        const embed2 = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle(selectedpark.Name + ' Queue Times')
        rideTimes.slice(26, 51).forEach((ride) => {
       if (ride.status == 'Operating') {
       			if (ride.waitTime == null) {
        			embed2.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        		} else {
	        	embed2.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
	        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
	        }
	        } else {
	        	
	        	embed2.addField(ride.name + ' (' + ride.status + ')', 'Closed');
	        	console.log(ride.name + ' (' + ride.status + ') ');
	        };
	    })
        const embed3 = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle(selectedpark.Name + ' Queue Times')
        rideTimes.slice(51, rides).forEach((ride) => {
       if (ride.status == 'Operating') {
       			var wait = ride.waitTime
       			if (ride.waitTime == null) {
        			embed3.addField(ride.name + ' (' + ride.status + ')', 'No wait time provided', true);
        			console.log(ride.name + ' (' + ride.status + ') ' + 'No wait time provided');
        			console.log(ride.waitTime);
        		} else {
	        	embed3.addField(ride.name + ' (' + ride.status + ')', ride.waitTime + ' minutes', true);
	        	console.log(ride.name + ' (' + ride.status + ') ' + ride.waitTime + ' minutes');
	        }
	        } else {
	        	
	        	embed3.addField(ride.name + ' (' + ride.status + ')', 'Closed');
	        	console.log(ride.name + ' (' + ride.status + ') ');
	        };
	    })
        console.log(rideTimes.length);
        
       	//sleep(5000).then(() => {
       	msg.reply(embed);
        msg.reply(embed2);
        msg.reply(embed3);
};

		});
		

  }
  CheckWaitTimes();
};
})




client.login(config.token);