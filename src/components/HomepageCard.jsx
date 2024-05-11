import Button from "./Button";

const HomepageCard = () => {
   return (
      <div>
         <div className="inline-block w-1/2 align-top">
            <img
               src="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTUzMjg1NjEwMTIsImNsYWltcyI6e30sImlhdCI6MTcxNTMyODU2MSwiZXhwIjoxNzE1MzI4ODYxLCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.FlSDdcdwqyL1rO1tgh1EgKFTeEAaV0n15uuEFh2a08c&data=eyJpbWFnZUlkIjoiNmE5MTNjNDYtYWM5My00ZGZhLWE2NTMtMThiN2I2ZDI4MDg4IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"
               className="max-w-full"
            />
         </div>
         <div className="inline-block w-1/2 pl-5 align-top">
            <h1 className="text-4xl font-bold">Burası Senin Yerin ☕️💚</h1>
            <p className="text-card-color">
               Hayatın içinde, her gülümsemede, her sohbette, cesaretle adım attığın
               her anda, ustalıkla yapılmış bir fincan kahveyle hayatlara dokunduğun,
               her zaman sevildiğin, kendin olabildiğin yerdesin. Yeni reklam
               filmimiz #BurasıSeninYerin’i izlemek için tıkla! ✨
            </p>
            <div>
               <Button className="btn-primary">Hemen izle</Button>
            </div>
         </div>
      </div>
   );
};

export default HomepageCard;
