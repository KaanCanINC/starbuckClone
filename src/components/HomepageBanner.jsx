import Button from "./Button";

const HomepageBanner = () => {
  return (
    <div>
      <div>
        <img
          src="https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMGVlNzRlYjBlYmUzNDczMWE5NzRhYjc3OGU0YmNiZjQiLCJ0aW1lc3RhbXAiOjE3MTU2OTI0Mjk2MTgsImNsYWltcyI6e30sImlhdCI6MTcxNTY5MjQyOSwiZXhwIjoxNzE1NjkyNzI5LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.I6SdcNSIlBB7R4ery87EzRlBd0xqeTEESsdFxy8qMwQ&data=eyJpbWFnZUlkIjoiMmUwNTg2NDktMmZiMS00Mjg2LWIwMjUtNTY0ZWMyZWFmYjZkIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&"
          className="max-w-full"
        />
      </div>
      <div className="px-16 py-8">
        <h1 className=" my-11 text-sb-3xl font-normal">
          STARBUCKS®’A YAZ GELDİİİ!
        </h1>
        <p className="my-[14px] text-card-color">
          Bu yazın YENİ soğuk kahve trendlerini birlikte keşfedelim mi? 😎
          Karşında Iced White Chocolate Pistachio Oat Shaken Espresso ve
          Chocolate Cream Cold Brew. ☕🧊 Dilersen Starbucks® Delivers ile
          serinliği istediğin yere getirelim. 🛵
        </p>
        <div>
          <Button variant={"primary"} className={"mr-6"}>
            Yemeksepeti
          </Button>
          <Button variant={"primary-outlined"} className={"mr-6"}>
            Getiryemek
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
