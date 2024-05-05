require("login.js");
require('./hud/hud.js')
require(`./playercommands/index.js`)
require('./playerchat/index.js')
require('./noclip/index.js')



//============================================================= PLAYER CHAT
mp.gui.chat.show(false);
mp.gui.chat.activate(false);
const chat = mp.browsers.new('package://playerchat/index.html');
chat.markAsChat();
//============================================================= PLAYER CHAT