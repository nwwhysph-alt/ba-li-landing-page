import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * בא לי - חנות צעצועים ומתנות
 * 
 * Design Philosophy: Vibrant Carnival with Playful Energy
 * - Vibrant colors: Electric Blue, Hot Pink, Lime Green, Golden Yellow
 * - Typography: Fredoka for headlines, Poppins for body, Comfortaa for accents
 * - Layout: Flowing organic sections with curved dividers and overlapping elements
 * - Interactions: Celebratory hover effects, playful animations, engaging micro-interactions
 */

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFACD] via-white to-[#F0F8FF]">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#0052CC]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032490278/CxdTLyqabQnui6G8QpXNBk/7c8c8bf733f549702b749f4b40499582_300_300_crop_808bddba.jpg"
              alt="בא לי לוגו"
              className="h-16 w-16 rounded-full shadow-md"
            />
          </div>
          
          <nav className="flex gap-4 text-[#2D0052] font-poppins font-semibold">
            <a href="#categories" className="hover:text-[#FF1493] transition-colors">קטגוריות</a>
            <a href="#services" className="hover:text-[#FF1493] transition-colors">שירותים</a>
            <a href="#location" className="hover:text-[#FF1493] transition-colors">איך מגיעים</a>
            <a href="#contact" className="hover:text-[#FF1493] transition-colors">צור קשר</a>
          </nav>
        </div>


      </header>



      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/467693830_122125268960517770_3289774841252406842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=9xV9dyjuwWMQ7kNvwENSPYJ&_nc_oc=AdlQb7iM4VNMlE3Zeu_3wdLWW4Pk-tCvlL7yXwcVuRVSLZevgGkJyqY1erWKE4G248o&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=QjaUparOrVjYPJQGXivVUg&_nc_ss=8&oh=00_AfwY3JhlUsFH-dH_CbRJ2CCPJ5cWH_hiefFSS8O5M5tBXA&oe=69B32306"
                alt="משפחה שמחה בחנות צעצועים"
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{marginTop: '8px', marginBottom: '-227px', height: '658px'}}
              />
            </div>
            
            <div className="order-1 md:order-2 text-right">
              <h1 className="text-5xl md:text-6xl font-fredoka font-bold text-[#2D0052] mb-4 leading-tight">
                בא לי משחק חדש!
              </h1>
              <p className="text-xl md:text-2xl text-[#FF1493] font-fredoka font-semibold mb-6">
                עולם של צעצועים, מתנות וחוויות לכל המשפחה
              </p>
              <p className="text-lg text-[#2D0052] font-poppins mb-8 leading-relaxed">
                בחנות בא לי תמצאו מגוון עצום של צעצועים איכותיים, משחקי לוח, מתנות מיוחדות וחוויות בלתי שכחות לילדים ולכל המשפחה.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  className="bg-[#0052CC] hover:bg-[#003DA3] text-white font-fredoka font-bold text-lg py-6 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.location.href = '#categories'}
                >
                  לצפייה בקטלוג
                </Button>
                <Button 
                  className="bg-[#FF1493] hover:bg-[#E60A7F] text-white font-fredoka font-bold text-lg py-6 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.location.href = 'tel:0723726475'}
                >
                  התקשרו עכשיו
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"/>
        </svg>
      </section>

      {/* Special Offer Banner with Gallery */}
      <section className="bg-gradient-to-r from-[#0052CC] via-[#FF1493] to-[#32FF00] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-20 h-20 bg-white rounded-full top-4 left-10 animate-pulse"></div>
          <div className="absolute w-16 h-16 bg-white rounded-full bottom-4 right-20 animate-bounce"></div>
          <div className="absolute w-12 h-12 bg-white rounded-full top-1/2 right-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-white mb-12 text-center drop-shadow-lg">
            מבצעים מיוחדים
          </h2>

          {/* Gallery Grid - 1:2 Aspect Ratio */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/571118647_122191539602517770_1620146985033297690_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=PX9hCP2npesQ7kNvwEfJ8CX&_nc_oc=Adlc4mf1GUq943k7_o5YRvMHJ0bVh4I06q6HOMeZYWTdA9Ez1LO4oG4iK8Fi9sUl01E&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=OtdifKAG2rFy4bKNZ18lMw&_nc_ss=8&oh=00_AfwM35y8tOmG0vWBDVH3HZMa_l3VDOadGAkZh2uEJLQZvg&oe=69B327DC",
              "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/570017470_122191539620517770_774977441950140086_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_ohc=HzqdUHfZ9PcQ7kNvwFWei5z&_nc_oc=AdmhTsqCZAEJGxugqwdbNN5lYKyBpJfT713aeEvh7gh5Anz0G9KnsyahCQZ11typLIk&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=8nARD2jBelGQMMvZzLj3-g&_nc_ss=8&oh=00_AfxK4iKjnzHpO7s-VGwGgWilnRgd0euyaC9Pejbl1y_Zsw&oe=69B310C0",
              "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/571154892_122191539656517770_4088842896195339720_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=IXQuSOCp34kQ7kNvwERkGSW&_nc_oc=AdnItIpmOuOG1FUmuDXlbo8PzsFjlC7o8ocdI0uZpMfJWuyu84cJKufMGkYue_KZxI4&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=siBKd2WrM6WmHhF05cbndA&_nc_ss=8&oh=00_AfxabFOBJQFNsEGJGKVA14MuGFxCqtdRdBa1uJye5-HEKg&oe=69B32F52",
              "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/571209979_122191539662517770_589359598795159833_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=Zjc9_sbN1KkQ7kNvwENaOxl&_nc_oc=AdkJIAM8d9JRr4imUvS2tkyop1oHar_ahlMER2IwLlTBZ_NMB5SbmfAlQBkqiNE2joc&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=siCKItA0Y_CgxXGoQ3sH3w&_nc_ss=8&oh=00_AfzqjmtpSJhjjfj4mgUWUaf2_SpYMZdR1MaB_TqIF-Ax6A&oe=69B3308F",
              "https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/571153124_122191539722517770_1539145487277639896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=gUK_xyIu8_gQ7kNvwE9zKzA&_nc_oc=Adk2R7L-mCqvpot4ebrUwNzHDxJRIyKBW6O2PntqDzOjxgbREqQUkH7-9AAYySSR3y0&_nc_zt=23&_nc_ht=scontent.ftlv5-1.fna&_nc_gid=rr4DJJGe8mys83nh2DLKKA&_nc_ss=8&oh=00_AfynkMtYhTzHfrvY02N6dF9Pu6Ul8pPQRtDa5jKxSjB-aQ&oe=69B32ECE",
              "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/569182772_122191539668517770_3466089936308841422_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=hvJ0_4CltrUQ7kNvwE2CdsP&_nc_oc=AdmwRyLATA7i6zau_TY9qE3PwgwEAJG9Q8mkrZkfzVvbCcN5eZuhSyEjkx46_pw8vzQ&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=QS429HcgmMXSC1tjmgKhBg&_nc_ss=8&oh=00_AfzhsgU00CBsGRwWrA1Hr3WyF8X7-bpfRR8Gj1SMySAq5g&oe=69B3289C",
              "https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/571255898_122191539686517770_889486090186377814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=Z4sel2ZNrvwQ7kNvwE0H0BN&_nc_oc=AdmEdCyFjPe6GlxtXtilcmFJEkrGi0M_FBxcB4NUS3XDY3KLz9v94I9CjHeCb-7M-BA&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=v3RyI-yd4nZHnB9j3z_hHQ&_nc_ss=8&oh=00_AfzkzmnPColfgV-_IhjScPitabSzAC9Icg4oMVETioK4Ug&oe=69B33D84"
            ].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={img} 
                  alt={`מבצע ${i + 1}`} 
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>

          {/* Order Button */}
          <div className="flex justify-center">
            <Button 
              className="bg-white text-[#FF1493] hover:bg-[#F0F0F0] font-fredoka font-bold text-lg py-6 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0723726475'}
            >
              הזמן עכשיו
            </Button>
          </div>
        </div>
      </section>

      {/* About/Categories Section */}
      <section id="categories" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-[#2D0052] text-center mb-4">
            מה אנחנו מציעים?
          </h2>
          <p className="text-lg text-[#2D0052] font-poppins text-center mb-12 max-w-2xl mx-auto">
            בחנות בא לי תמצאו מגוון רחב של מוצרים איכותיים לכל גיל ולכל הזדמנות. אנחנו מתגאים בהציע מוצרים מהיצרנים המובילים בעולם, בשילוב עם מוצרים מקומיים ייחודיים.
          </p>

          <div className="bg-gradient-to-br from-[#FFFACD] via-white to-[#F0F8FF] p-8 md:p-12 rounded-3xl shadow-lg mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-fredoka font-bold text-[#0052CC] mb-4">צעצועים ומשחקים</h3>
                <ul className="space-y-3 text-lg text-[#2D0052] font-poppins">
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> צעצועים איכותיים</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> משחקי קופסא</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> משחקים מעץ</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> משחקי מחשבה</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> פאזלים</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> בובות</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-fredoka font-bold text-[#0052CC] mb-4">מתנות ומוצרים</h3>
                <ul className="space-y-3 text-lg text-[#2D0052] font-poppins">
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> מתנות</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> מוצרי פופ</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> מוצרי תינוקות</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> ציוד משרדי וכלי כתיבה</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> בלוני הליום</li>
                  <li className="flex items-center gap-2"><span className="text-[#FF1493] font-bold">•</span> ועוד!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <img 
              src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/592508991_122198340212517770_665507372433605222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=3svHMN1EWjUQ7kNvwFKbrYi&_nc_oc=AdnyjuUtpgjtiY9QnuXgusYKfI2ekIDgEm9HQrssw25yScg1cOe5IjdZLtJnn6tw5CU&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=0G-RIhPpyG0Sw-QjisTJlw&_nc_ss=8&oh=00_AfznqcceIQ_iGkXQ3pxoLqeIC7RGGfN4npg87GqnLJjkyA&oe=69B3303E"
              alt="קטגוריות המוצרים"
              className="w-full max-w-4xl h-auto rounded-3xl shadow-2xl" style={{paddingLeft: '7px', marginRight: '9px', marginBottom: '1px', objectFit: 'contain'}}
            />
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-[#F0F8FF] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-[#2D0052] text-center mb-12">
            שירותי הדפסה מיוחדים
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "", title: "הדפסת דף סוכר", desc: "דפי סוכר בעיצוב אישי לעוגות ומתנות" },
              { icon: "", title: "הדפסת תמונות", desc: "הדפסת תמונות באיכות גבוהה" },
              { icon: "", title: "למינציה", desc: "שימור ותיקיה של מסמכים ותמונות" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#FF1493]">
                <h3 className="text-2xl font-fredoka font-bold text-[#2D0052] mb-2 text-center">{service.title}</h3>
                <p className="text-[#2D0052] font-poppins text-center">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-[#2D0052] font-poppins mb-6">צריכים שירות הדפסה מיוחד? התקשרו אלינו!</p>
            <Button 
              className="bg-[#FF1493] hover:bg-[#E60A7F] text-white font-fredoka font-bold text-lg py-6 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0723726475'}
            >
              התקשרו עכשיו
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-[#2D0052] text-center mb-12">
            איך מגיעים?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-right">
              <div className="mb-8">
                <h3 className="text-2xl font-fredoka font-bold text-[#0052CC] mb-3">הנו נמצאים ב:</h3>
                <p className="text-lg text-[#2D0052] font-poppins flex items-center justify-end gap-2">
                  <span>חיים וייצמן 26מודיעין מכבים רעות</span>
                  <MapPin className="text-[#FF1493]" size={24} />
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-fredoka font-bold text-[#32FF00] mb-3">חניה חינם!</h3>
                <ul className="space-y-2 text-lg text-[#2D0052] font-poppins">
                  <li className="flex items-center justify-end gap-2">
                    <span>חניה חינם ברחוב</span>
                    <span className="text-2xl">✓</span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>2 שעות חניה חינם בחניון תת-קרקעי וייצמן 26 (הליכה של דקה בלבד)</span>
                    <span className="text-2xl">✓</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-fredoka font-bold text-[#FF1493] mb-3">קל להגיע!</h3>
                <p className="text-lg text-[#2D0052] font-poppins">
                  אנחנו ממוקמים בלב מורשת, קל להגיע מכל מקום בשכונה. חניה חינם וקרובה!
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="https://maps.app.goo.gl/kikj2WTvUkw5UAnp8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#0052CC] to-[#FF1493] text-white font-fredoka font-bold text-2xl py-6 px-12 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                למסלול
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-[#F0F8FF] to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-[#2D0052] text-center mb-12">
            צור קשר
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Hours */}
            <div className="bg-gradient-to-br from-[#0052CC] to-[#003DA3] p-8 rounded-2xl shadow-lg text-white text-right">
              <div className="flex items-center justify-end gap-3 mb-4">
                <h3 className="text-2xl font-fredoka font-bold">שעות פתיחה</h3>
                <Clock size={28} />
              </div>
              <ul className="space-y-2 font-poppins text-lg">
                <li>ראשון - חמישי: 08:30 - 21:00</li>
                <li>שישי: 08:00-14:00 (שעון חורף) / 08:00-15:00 (שעון קיץ).</li>
                <li>שבת: סגור</li>
              </ul>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-[#FF1493] to-[#E60A7F] p-8 rounded-2xl shadow-lg text-white text-right">
              <div className="flex items-center justify-end gap-3 mb-4">
                <h3 className="text-2xl font-fredoka font-bold">טלפון</h3>
                <Phone size={28} />
              </div>
              <a href="tel:0723726475" className="text-2xl font-fredoka font-bold hover:underline">
                072-3726475
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-[#32FF00] to-[#00CC00] p-8 rounded-2xl shadow-lg text-white text-right">
              <div className="flex items-center justify-end gap-3 mb-4">
                <h3 className="text-2xl font-fredoka font-bold">דוא״ל</h3>
                <Mail size={28} />
              </div>
              <a href="mailto:Bl.La.toys@gmail.com" className="text-lg font-fredoka font-bold hover:underline break-all">
                Bl.La.toys@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-fredoka font-bold text-[#2D0052] mb-6">
              עקבו אחרינו ברשתות החברתיות
            </h3>
            <div className="flex justify-center gap-6">
              <a href="https://www.facebook.com/profile.php?id=61565533112846" className="bg-[#0052CC] text-white p-4 rounded-full hover:scale-110 transition-transform">
                <Facebook size={32} />
              </a>
              <a href="https://www.instagram.com/bali.modiin" className="bg-[#FF1493] text-white p-4 rounded-full hover:scale-110 transition-transform">
                <Instagram size={32} />
              </a>
              <a href="https://wa.me/972542223682/" className="bg-[#32FF00] text-white p-4 rounded-full hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D0052] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-poppins mb-2">© 2026 בא לי - כל הזכויות שמורות</p>
          <p className="font-poppins text-sm opacity-80"></p>
        </div>
      </footer>
    </div>
  );
}
