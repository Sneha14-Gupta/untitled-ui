import {
  TbMessageCircle,
  TbMap2,
  TbDeviceMobile,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandX,
} from "react-icons/tb";

function Aside() {
  const contactInfo = [
    {
      id: 0,
      icon: TbMessageCircle,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
    },
    {
      id: 1,
      icon: TbMap2,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
    },
    {
      id: 2,
      icon: TbDeviceMobile,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
    },
  ];

  return (
    <aside className="flex min-h-screen flex-col justify-between">
      <div>
        {contactInfo.map((info) => {
          return (
            <div key={info.id} className="mb-5">
              <h3 className="text-lg font-bold">
                {<info.icon size={25} />} {info.title}
              </h3>
              <p className="mb-2 text-slate-700">{info.description}</p>
              <p className="cursor-pointer">{info.action}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2">
        <TbBrandFacebook size={25} className="cursor-pointer" />
        <TbBrandLinkedin size={25} className="cursor-pointer" />
        <TbBrandX size={25} className="cursor-pointer" />
      </div>
    </aside>
  );
}

export default Aside;