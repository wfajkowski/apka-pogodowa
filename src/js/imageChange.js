const now = new Date();
const hour = now.getHours();

export function imageChange(){
    let random= Math.floor(Math.random() * 6) + 0;
    const sunnyday = ["url('https://wallpapercave.com/wp/Z488xVg.jpg')",
                     "url('https://wallpapercave.com/wp/gEV1vRn.jpg')",
                     "url('https://wallpapercave.com/wp/uBRccgr.jpg')",
                     "url('https://wallpapercave.com/wp/Ar4zNP1.jpg')",
                     "url('https://wallpapercave.com/wp/AnnAt65.jpg')",
                     "url('https://wallpapercave.com/wp/wp1825310.jpg')",];
    const afternoon = ["url('https://3.bp.blogspot.com/-PQFuLl6p1XA/UzE9nMe17nI/AAAAAAAAAE4/kWzBK_b1TKc/s1600/just-a-sunny-day-1920x1080-wallpaper-6626.jpg')",
                    "url('https://4.bp.blogspot.com/-NkztnG-fYY0/UzFDRFN0R7I/AAAAAAAAAFc/BzB6D8ZJdBA/s1600/tree-path-landscape-1920x1080-wallpaper.jpg')",
                    "url('https://3.bp.blogspot.com/-0w_9vnD34WU/Uy6eJyD3rVI/AAAAAAAAADI/-bkMsjAOZO8/s1600/island_of_rakin_kotka-1920x1080+Wallpaper.jpg')",
                    "url('https://4.bp.blogspot.com/-Bgv4yb7wahg/Uy6S_-T6ZKI/AAAAAAAAACg/_atZN-32f9U/s1600/sunset-landscape-1920x1080-wallpaper-8606.jpg')",     "url('https://1.bp.blogspot.com/-hjHnkrhbG8E/Uy5uqCTRxxI/AAAAAAAAABk/SoN0BMKhKsc/s1600/beautiful-sunrise-1920x1080-wallpaper-13421.jpg')",
                    "url('https://3.bp.blogspot.com/--07nywMKBSM/Uy5ydpShTQI/AAAAAAAAABw/jdJckPGxKuw/s1600/mountain-road-1920x1080-wallpaper-2662.jpg')",];
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
