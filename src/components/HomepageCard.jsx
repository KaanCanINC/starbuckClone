import Button from "./Button";

const HomepageCard = ({ content }) => {
  return (
    <div className="mb-[50px]">
      <div className=" inline-block w-full align-top lg:w-1/2">
        <img src={content.image} className="max-w-full" />
      </div>
      <div className="inline-block w-full pl-0 align-top lg:w-1/2 lg:pl-5">
        <h1 className="text-sb-2xl font-bold">{content.title}</h1>
        <p className="my-[14px] text-card-color">{content.subtitle}</p>
        <div>
          {content.buttons.length > 0 && (
            <div>
              {content.buttons.map((button) => (
                <Button
                  variant={button.id === 1 ? "primary" : "primary-outlined"}
                  className="mr-6"
                  key={button.id}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageCard;
