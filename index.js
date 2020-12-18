const Discord = require('discord.js');
const bot= new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is now online!');
})
bot.on('message', msg=>{
    if((msg.content === "namaste")||(msg.content === "Namaste")){
         msg.reply('Namaste!')
    } 
 })
bot.on('message', msg=>{
    if((msg.content === "konichiwa")||(msg.content === "Konichiwa")){
         msg.reply('Konichiwa!')
    } 
 })
bot.on('message', msg=>{
    if((msg.content === "Yo")||(msg.content === "yo")){
         msg.reply('Yo!')
    } 
 })
bot.on('message', msg=>{
    if((msg.content === "Hi")||(msg.content === "hi")){
         msg.reply('Hi!')
    } 
 })
bot.on('message', msg=>{
   if((msg.content === "Hey")||(msg.content === "hey")){
        msg.reply('Hey!')
   } 
})
bot.on('message', msg=>{
    if((msg.content === "Hello")||(msg.content === "hello")){
         msg.reply('Hello!')
    } 
 })
 bot.on('message', msg=>{
    if((msg.content === "Thanks")||(msg.content === "thanks")){
         msg.reply('You are welcome!')
    } 
 })
 bot.on('message', msg=>{
    if((msg.content === "sup")||(msg.content === "Sup")){
         msg.reply('Sup Nigga')
    } 
 })

bot.login(process.env.token);