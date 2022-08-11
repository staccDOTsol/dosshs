var fs = require('fs') // yarn add express cors body-parser 
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const { exec } = require('child_process');
const json = require('body-parser/lib/types/json');

var winning = {"winning":"", "lastplay": 0, "nextthousand":0, "nextseed":""}
var seeds = JSON.parse(fs.readFileSync("./seeds.json").toString())
var app = express()
let configs = []
app.use(cors())
setInterval(async function(){
    try {
    fs.writeFileSync('./winning.json', JSON.stringify(winning))
    fs.writeFileSync('./seeds.json', JSON.stringify(seeds))
    } 
    catch (err){

    }
}, 60 * 1000)
let counter = 0;
var jsonParser = bodyParser.json()
var nextseed  
let nextthousand = (Math.ceil(new Date().getTime() / 1000 / 1000)) 
try {
fs.mkdirSync(nextthousand.toString())
} catch (err){}
let first = true
console.log(nextthousand)
let ls = exec('solana-keygen new --no-bip39-passphrase --force   -o' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);

ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
  console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

  if (error) {
    console.log(error.stack);
    console.log('Error code: ' + error.code);
    console.log('Signal received: ' + error.signal);
  }
  console.log('Child Process STDOUT: ' + stdout);
    nextseed = stdout
    winning = {winning: winning.winning, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand}
    console.log(stdout)
    console.log(stdout)
    console.log(stdout)
    console.log(stdout)

  console.log('Child Process STDERR: ' + stderr);
try {
ls = exec("echo '" + JSON.stringify({
"winOracle": null,
"matchState": { "initialized": true },
"winOracleCooldown": 0,
"space": 300,
"minimumAllowedEntryTime": null,
"tokenEntryValidation": null,
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"leaveAllowed": true,
"joinAllowedDuringStart": true,
"oracleState": {
"seed": nextseed.replace('\n',''),
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"finalized": false,
"tokenTransferRoot": null,
"tokenTransfers": [ ]
},
"tokensToJoin": [
{
"mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
"amount": 13800,
"sourceType": 1,
"index": 0,
"validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
}
]
}) + "' >> " +  (nextthousand).toString() + 'm.json', function (error, stdout, stderr) {

if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);

ls = exec("echo '" + JSON.stringify({
"winOracle": null,
"matchState": { "started": true },
"winOracleCooldown": 0,
"space": 300,
"minimumAllowedEntryTime": null,
"tokenEntryValidation": null,
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"leaveAllowed": true,
"joinAllowedDuringStart": true,
"oracleState": {
"seed": nextseed.replace('\n',''),
"authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
"finalized": false,
"tokenTransferRoot": null,
"tokenTransfers": [ ]
},
"tokensToJoin": [
{
  "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
  "amount": 13800,
  "sourceType": 1,
  "index": 0,
  "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
}
]
}) + "' >> " +  (nextthousand).toString() + 'ma.json', function (error, stdout, stderr) {

if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);
try {
ls = exec('sh do2.sh ' + (nextthousand).toString() + 'm.json ' + (nextthousand).toString() +'ma.json' , function (error, stdout, stderr) {
if (error) {
console.log(error.stack);
console.log('Error code: ' + error.code);
console.log('Signal received: ' + error.signal);
}
console.log('Child Process STDOUT: ' + stdout);
console.log('Child Process STDERR: ' + stderr);
});

ls.on('exit', function (code) {
console.log('Child process exited with exit code ' + code);
nextthousand = maybe 
}); }
catch (err){

}
})
})} catch (err){}})})})

setInterval(async function(){
    try {
    maybe = (Math.ceil(new Date().getTime() / 1000 / 1000)) 
    if (maybe > nextthousand || first){
        first = false
   for (var config of configs){
    let haha = Math.random() 
    config.oracleState.tokenTransfers[0].to = winners.winning 
    if (haha < 0.1){
      config.oracleState.tokenTransfers[0].to = "4DevNqTkqssc177AhRjKJV2692VhGhb137U38camFUq9"
    }


   
fs.writeFileSync(nextthousand.toString()  + '/' + counter.toString() + '.json', JSON.stringify(config))
   }
   nextthousand = maybe 
     let ls = exec('solana-keygen new --no-bip39-passphrase --force   -o' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {

            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
            console.log('Child Process STDERR: ' + stderr);
          });
          
          ls.on('exit', function (code) {
            console.log('Child process exited with exit code ' + code);
       
          ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
            console.log('Child Process STDERR: ' + stderr);
          });
          
          ls.on('exit', function (code) {
            console.log('Child process exited with exit code ' + code);
          ls = exec('solana address -k ' + (nextthousand).toString() + '.json', function (error, stdout, stderr) {
          
            if (error) {
              console.log(error.stack);
              console.log('Error code: ' + error.code);
              console.log('Signal received: ' + error.signal);
            }
            console.log('Child Process STDOUT: ' + stdout);
              nextseed = stdout
              winning = {winning: winning.winning, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand}
              console.log(stdout)
              console.log(stdout)
              console.log(stdout)
              console.log(stdout)

            console.log('Child Process STDERR: ' + stderr);
         try {
ls = exec("echo '" + JSON.stringify({
    "winOracle": null,
    "matchState": { "initialized": true },
    "winOracleCooldown": 0,
    "space": 300,
    "minimumAllowedEntryTime": null,
    "tokenEntryValidation": null,
    "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
    "leaveAllowed": true,
    "joinAllowedDuringStart": true,
    "oracleState": {
      "seed": nextseed.replace('\n',''),
      "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
      "finalized": false,
      "tokenTransferRoot": null,
      "tokenTransfers": [ ]
    },
    "tokensToJoin": [
      {
        "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
        "amount": 13800,
        "sourceType": 1,
        "index": 0,
        "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
      }
    ]
  }) + "' >> " +  (nextthousand).toString() + 'm.json', function (error, stdout, stderr) {

    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);

    ls = exec("echo '" + JSON.stringify({
        "winOracle": null,
        "matchState": { "started": true },
        "winOracleCooldown": 0,
        "space": 300,
        "minimumAllowedEntryTime": null,
        "tokenEntryValidation": null,
        "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
        "leaveAllowed": true,
        "joinAllowedDuringStart": true,
        "oracleState": {
          "seed": nextseed.replace('\n',''),
          "authority": "CMVfmxKAK1VQMFAQifnpsmTmg2JEdLtw5MkmqqHm9wCY",
          "finalized": false,
          "tokenTransferRoot": null,
          "tokenTransfers": [ ]
        },
        "tokensToJoin": [
          {
            "mint": "7Ti7cweodcPBcGEXVAJnu2CsY3zCXrKChTbUEqUgSiKi",
            "amount": 13800,
            "sourceType": 1,
            "index": 0,
            "validationProgram": "nameAxQRRBnd4kLfsVoZBBXfrByZdZTkh8mULLxLyqV"
          }
        ]
      }) + "' >> " +  (nextthousand).toString() + 'ma.json', function (error, stdout, stderr) {
    
        if (error) {
          console.log(error.stack);
          console.log('Error code: ' + error.code);
          console.log('Signal received: ' + error.signal);
        }
        console.log('Child Process STDOUT: ' + stdout);
        console.log('Child Process STDERR: ' + stderr);
      });
      
      ls.on('exit', function (code) {
        console.log('Child process exited with exit code ' + code);
    try {
  ls = exec('sh do2.sh ' + (nextthousand).toString() + 'm.json ' + (nextthousand).toString() +'ma.json' , function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
    nextthousand = maybe 
  }); }
   catch (err){

   }
});   });   } catch (err){}}); });
          
ls.on('exit', function (code) {
  console.log('Child process exited with exit code ' + code);
})          });

    }    
    winning = {"winning": winning.winning, "lastplay": winning.lastplay, nextseed, nextthousand }

} catch (err){
    console.log(err)
}
try {
  ls = exec('sh do.sh ' + (nextthousand ).toString()  , function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
  });
  
  ls.on('exit', function (code) {
   console.log('Child process exited with exit code ' + code);
  
  })
}
 catch (err){}
}, 60 * 1000)
app.use(express.json())
app.get(
  '/stuff',
  async function
  (req, res) { 
    //console.log(winning)
res.send(winning)
  })
app.post(
  '/join',jsonParser,
  async function
  (req, res) { 
    try {
    let config = (req.body) 
    console.log(nextseed)
    console.log(nextseed)
    console.log(nextseed)
    console.log(nextseed)
    winning = {"winning": config.oracleState.tokenTransfers[0].from, "lastplay": Math.ceil(new Date().getTime() / 1000), nextseed, nextthousand }//, s: Math.ceil(new Date().getTime() / 1000)
    config.oracleState.finalized = true
  configs.push(config)
counter++;
}
catch (err){
    console.log(err)
}
res.json(winning)
  }
)

console.log(nextthousand)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
