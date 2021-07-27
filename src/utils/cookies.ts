
interface CookiesIterFace { 
     add?: (cname: string, cvalue: string, exdays: number) => void
     get?:(name:string)=>string
}




var Cookies: CookiesIterFace = {};
(function (context: CookiesIterFace) {

     
    context.get = (cname)=>{
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return ""
    }

    context.add = function (cname: string, cvalue: string, exdays: number) {
        const d = new Date();
        let ex: number = (exdays * 24 * 60 * 60 * 1000)
        d.setTime(d.getTime() + ex);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

})(Cookies);



export default Cookies
