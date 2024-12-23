
"use client"
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import Snowfall from "react-snowfall"; // Yangi yil qori
import Judo from "@/public/judo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-white to-green-100 flex flex-col items-center relative">
      {/* Snowfall effect */}
      <Snowfall color="#fff" snowflakeCount={100} />

      {/* Header Section */}
      <div className="text-center py-8">
        <Image
          src={Judo}
          alt="Logo"
          className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-green-500"
        />
        <h1 className="text-5xl font-extrabold text-red-800 mt-4">
          AXI TOYS  <span className="text-4xl text-blue-950">(O’YINCHOQLAR DO’KONI)</span>🎄
        </h1>
        <p className="text-gray-800 mt-2 text-lg tracking-wide">
          Yangi Yilingiz bilan!
        </p>
        <p>🚚Toshkent bo'ylab yetkazish xizmati!</p>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Ijtimoiy tarmoqlarimiz!
        </h1>
        <a
          href="https://t.me/axi_toys_uz"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <TelegramIcon className="text-blue-600 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram</h1>
            <p className="text-gray-600">@axi_toys_uz</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/axi_toys_uz/"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 transition border"
        >
          <InstagramIcon className="text-pink-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Instagram</h1>
            <p className="text-gray-600">@axi_toys_uz</p>
          </div>
        </a>
        <a
          href="https://t.me/AbuZayd_Qori"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <SendIcon className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram Admin</h1>
            <p className="text-gray-600">@AbuZayd_Qori</p>
          </div>
        </a>
        {/* Phone Number */}
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition border">
          <PhoneIcon className="text-green-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Bog'lanish</h1>
            <p className="text-gray-600">+998 95 637 9797</p>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 mt-10 mb-8 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Manzil (Filiallarimiz)
        </h1>
        <a href="https://www.google.com/maps/place/Axi+Toys+uz/@41.3683785,69.2659827,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae8d005b672e5f:0x19d404913a6f05b5!8m2!3d41.3683785!4d69.2685576!16s%2Fg%2F11ltfy_l23?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border">
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Yunusobod 6-kv</h1>
            <p className="text-gray-600">☎️Tel: +998 94 642 3300</p>
          </div>
        </a>
        <a href="https://www.google.com/maps/place/Axi+Toys+Uz/@41.2966908,69.2149451,19.14z/data=!4m6!3m5!1s0x38ae8b0066a82d07:0x674569ada712a91a!8m2!3d41.2969136!4d69.2151674!16s%2Fg%2F11ltd8snd8?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border">
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Chilonzor 7-kv</h1>
            <p className="text-gray-600">☎️Tel: +998 95 637 9797</p>
          </div>
        </a>
        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border">
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Qoraqamish 1/2</h1>
            <p className="text-gray-600">☎️Tel: +998 77 034 7050</p>
          </div>
        </div>
        {/* <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition">
          <NearMeIcon className="text-green-500 text-3xl" />
          <div>
            <a
              href="https://maps.app.goo.gl/ZEoNCx3wXhbDqU6i8"
              className="text-blue-600 hover:underline"
            >
              Lokatsiya
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
