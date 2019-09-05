const now = new Date();
const hour = now.getHours();

export function imageChange(){
    let random= Math.floor(Math.random() * 11) + 0;
    const sunnyday = ["url('https://wallpapercave.com/wp/4kch57a.jpg')",
                     "url('https://wallpapercave.com/wp/gEV1vRn.jpg')",
                     "url('https://wallpapercave.com/wp/wp1163469.jpg')",
                     "url('https://wallpapercave.com/wp/wp4118210.jpg')",
                     "url('https://wallpapercave.com/wp/wp2224526.jpg')",
                     "url('https://wallpapercave.com/wp/wp2218426.jpg')",
                     "url('https://wallpapercave.com/wp/wp2116418.jpg')",
                     "url('https://wallpapercave.com/wp/uBRccgr.jpg')",
                     "url('https://wallpapercave.com/wp/wp2116482.jpg')",
                     "url('https://wallpapercave.com/wp/Rrvm0EZ.jpg')",
                     "url('https://wallpapercave.com/wp/wp1825310.jpg')",];
    const afternoon = ["url('https://wallpapercave.com/wp/wp4092996.jpg')",
                    "url('https://wallpapercave.com/wp/mgqYTxa.jpg')",
                    "url('https://wallpapercave.com/wp/SohkRB8.jpg')",
                    "url('https://wallpapercave.com/wp/wp4222883.jpg')",
                    "url('https://wallpapercave.com/wp/AnnAt65.jpg')",
                    "url('https://wallpapercave.com/wp/wp2060816.jpg')",
                    "url('https://wallpapercave.com/wp/wp2491056.jpg')",
                    "url('https://wallpapercave.com/wp/wp2523984.jpg')",
                    "url('https://wallpapercave.com/wp/wp2524113.jpg')",
                    "url('https://4.bp.blogspot.com/-Bgv4yb7wahg/Uy6S_-T6ZKI/AAAAAAAAACg/_atZN-32f9U/s1600/sunset-landscape-1920x1080-wallpaper-8606.jpg')",     
                    "url('https://1.bp.blogspot.com/-hjHnkrhbG8E/Uy5uqCTRxxI/AAAAAAAAABk/SoN0BMKhKsc/s1600/beautiful-sunrise-1920x1080-wallpaper-13421.jpg')",
                    "url('https://wallpapercave.com/wp/wp2060816.jpg')",];
    if(hour > 16) {
    document.querySelector("header").style.backgroundImage=afternoon[random];
    document.querySelector(".current-weather").style.backgroundImage=sunnyday[random];
    document.querySelector("body").style.backgroundColor="rgba(200, 200, 200, 0.644)";
  }else {
    document.querySelector("header").style.backgroundImage=sunnyday[random];
    document.querySelector(".current-weather").style.backgroundImage=afternoon[random];
  }
}

// document.querySelectorAll(".forecast-item").style.backgroundImage=sunnyday[random];
