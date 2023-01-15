/**
 * @author 一米阳光
 * @origin 一米阳光
 * @version v1.1.0
 * @description 机场签到glados
 * @create_at 2022-12-11 11:12:30
 * @title 机场签到glados
 * @rule 机场签到 
 * @disable false
 * @public true
 * @cron
 * 
 */
//自行修改定时时间cron  1 0,6 * * *
cookie = ''
/** */
 /*hidden*/ 
const s = sender
var isCron = s.getPlatform() == "cron"
const sg = new SillyGirl();
//data = {"token": "glados.network"}
     var {body} =request ({
             
			url: "https://glados.rocks/api/user/checkin",  
            'method': "POST",
             // 这是请求的 url 可以直接用我们抓包、精简后的URL
			headers: {   
                'authority': 'glados.rocks',
                'method': 'POST',
                'path': '/api/user/checkin',
                'scheme': 'https',
                'accept': 'application/json, text/plain, */*',
                //'accept-encoding': 'gzip, deflate, br',
               // 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
                //'authorization': '1107979040659170353175691805430-1000-1600',
               // 'content-length': '26',
                'content-type': 'application/json;charset=UTF-8',
                'cookie':cookie,
                //'dnt':'1',
                'origin':'https://glados.rocks',
                'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"',
                //'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                //'sec-fetch-dest': 'empty',
                //'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.42',         // headers 是请求体  可以直接用精简后的 hd  也就是服务器校验的部分，他需要啥，我们就给他啥 
			},
           body:{"token": "glados.network"},
			       // 这是一个 get 请求，没有请求体 body   如果是 post 不要忘记他鸭！
			//json:true,
		});
   
    let result = JSON.parse(body);
	if (result.code == 200) {        // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					s.reply(`【签到】${result.message} 🎉 `)
					msg += `\n【签到】${result.message} 🎉`
 
				} else if (result.code === 1) {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					s.reply(`\n${result.message}!\n `)
 
 
				} else if (result.code === 40001) {   // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					s.reply(`\n${result.message}!\n `)
 
 
				} else {    // 这里是根据服务器返回的数据做判断  方便我们知道任务是否完成了
 
					s.reply(`未设置cookie，请设置，或者检查网络设置 `)
 
 
				}
        sleep(5000);
 	if (isCron) {
		if (result.code == 200)
    sleep(5000) ;{
			sg.notifyMasters(`【签到成功】${result.message} 🎉 `);
			 
      }}
      /*if (result.code == 1) {
			sg.notifyMasters(`${result.message} 🎉 `);
			 
      }*/
     /*else{
          if(result.code == 1)
			sg.notifyMasters(`${result.message} 🎉 `
				);}*/

		
	//console.log(body)
   //s.reply(body)
   /*neddih*/
