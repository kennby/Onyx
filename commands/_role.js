const { cmd } = require('../lib')


cmd({
on: "all"
},
async (m) => {
const user = global.db.data.users[m.sender]
if (user) { //@skidy89 

 if (user.level <= 3) { 
   user.role = 'NOVATO(A) I' 
 } else if (user.level <= 6) { 
   user.role = 'NOVATO(A) II' 
 } else if (user.level <= 9) { 
   user.role = 'NOVATO(A) III' 
 } else if (user.level <= 12) { 
   user.role = 'NOVATO(A) IV' 
 } else if (user.level <= 15) { 
   user.role = 'APRENDIS I' 
 } else if (user.level <= 18) { 
   user.role = 'APRENDIS II' 
 } else if (user.level <= 21) { 
   user.role = 'APRENDIS III' 
 } else if (user.level <= 24) { 
   user.role = 'APRENDIS IV' 
 } else if (user.level <= 27) { 
   user.role = 'EXPLORADOR(A) I' 
 } else if (user.level <= 30) { 
   user.role = 'EXPLORADOR(A) II' 
 } else if (user.level <= 33) { 
   user.role = 'EXPLORADOR(A) III' 
 } else if (user.level <= 36) { 
   user.role = 'EXPLORADOR(A) IV' 
 } else if (user.level <= 39) { 
   user.role = '🏆 Elite I' 
 } else if (user.level <= 42) { 
   user.role = '🏆 Elite II' 
 } else if (user.level <= 45) { 
   user.role = '🏆 Elite III' 
 } else if (user.level <= 48) { 
   user.role = '🏆 Elite IV' 
 } else if (user.level <= 51) { 
   user.role = '👑 Maestro I' 
 } else if (user.level <= 54) { 
   user.role = '👑 Maestro II' 
 } else if (user.level <= 57) { 
   user.role = '👑 Maestro III' 
 } else if (user.level <= 60) { 
   user.role = '🌟 Leyenda I' 
 } else if (user.level <= 63) { 
   user.role = '🌟 Leyenda II' 
 } else if (user.level <= 66) { 
   user.role = '🌟 Leyenda III' 
 } else if (user.level <= 69) { 
   user.role = '🔥 Mítico I' 
 } else if (user.level <= 72) { 
   user.role = '🔥 Mítico II' 
 } else if (user.level <= 75) { 
   user.role = '🔥 Mítico III' 
 } else if (user.level <= 78) { 
   user.role = '💫 Supremo I' 
 } else if (user.level <= 81) { 
   user.role = '💫 Supremo II' 
 } else if (user.level <= 84) { 
   user.role = '💫 Supremo III' 
 } else if (user.level <= 87) { 
   user.role = '🌀 Divino I' 
 } else if (user.level <= 90) { 
   user.role = '🌀 Divino II' 
 } else if (user.level <= 93) { 
   user.role = '🌀 Divino III' 
 } else if (user.level <= 96) { 
   user.role = '🌌 Celestial I' 
 } else if (user.level <= 99) { 
   user.role = '🌌 Celestial II' 
 } else if (user.level <= 102) { 
   user.role = '🌌 Celestial III' 
 } else if (user.level <= 105) { 
   user.role = '🌟 Estelar I' 
 } else if (user.level <= 108) { 
   user.role = '🌟 Estelar II' 
 } else if (user.level <= 111) { 
   user.role = '🌟 Estelar III' 
 } else if (user.level <= 114) { 
   user.role = '🌠 Universal I' 
 } else if (user.level <= 117) { 
   user.role = '🌠 Universal II' 
 } else if (user.level <= 120) { 
   user.role = '🌠 Universal III' 
 } else if (user.level <= 123) { 
   user.role = '🎖️ Supremacía I' 
 } else if (user.level <= 126) { 
   user.role = '🎖️ Supremacía II' 
 } else if (user.level <= 129) { 
   user.role = '🎖️ Supremacía III' 
 } else if (user.level <= 132) { 
   user.role = '🔱 Divinidad I' 
 } else if (user.level <= 135) { 
   user.role = '🔱 Divinidad II' 
 } else if (user.level <= 138) { 
   user.role = '🔱 Divinidad III' 
 } else if (user.level <= 141) { 
   user.role = '🌌 Infinito I' 
 } else if (user.level <= 144) { 
   user.role = '🌌 Infinito II' 
 } else if (user.level <= 147) { 
   user.role = '🌌 Infinito III' 
 } else if (user.level <= 150) { 
   user.role = '🌠 Eterno' 
 }}} catch (error) { 
 m.error = error 
 if (error) { 
 console.error(m.error) 
 }}
}) 