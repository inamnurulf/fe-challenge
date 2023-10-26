"use client";
import React from "react";
import Card from "@/components/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Post = () => {
  const array = [
    {
        "id": 80704,
        "user_id": 5507792,
        "title": "Ambulo ultra vetus subito cogo curis vulgo colligo umbra.",
        "body": "Aut synagoga dedecor. Tracto pauper cauda. Adiuvo pecto amplitudo. Totam aut tunc. Venio bonus delego. Vorax campana cicuta. Quaerat auditor suasoria. Consuasor vorago nemo. Tremo adopto atqui. Triumphus voluptatem vulnus. Illo et absens."
    },
    {
        "id": 80703,
        "user_id": 5507791,
        "title": "Concido calculus vero virtus benevolentia trans.",
        "body": "Bellicus volaticus vestrum. Debilito truculenter ventus. Ultra dens unus. Tonsor labore clibanus. Traho bene vitiosus. Sub nulla patior. Virga stella ipsum. Turpe rerum atque. Adficio cauda aetas. Carmen quis vitae. Odit crapula iure. Tantum velut stips. Delicate thema contabesco. Et tot caput. Appositus solio sit. Cauda aeneus hic. Stella verbum tempus. Ater aliqua atavus. Administratio articulus vulgivagus."
    },
    {
        "id": 80702,
        "user_id": 5507790,
        "title": "Collum necessitatibus avarus vos repellendus ventus quasi.",
        "body": "Vulgivagus caelum cometes. Cum agnitio sophismata. Doloremque audentia comparo. Articulus vicinus calcar. Tristis aiunt autem. Succedo mollitia coadunatio. Triduana comparo spectaculum. Sopor stips adhuc. Ter dolore crastinus. Suadeo demonstro alter. Demergo bene curis. Tabesco provident quia. Currus adinventitias sodalitas. Ago talus aeneus. Viriliter tergum blanditiis."
    },
    {
        "id": 80701,
        "user_id": 5507788,
        "title": "Quia culpa decens cado ulciscor ancilla aranea adiuvo vultuosus.",
        "body": "Tardus adulatio conitor. Adficio reiciendis aranea. Delego curto stabilis. Clamo cursim tollo. Repudiandae tui ratione. Umquam votum perferendis. Comes adinventitias abscido. Omnis reiciendis vorax. Tutis uterque demens. Coniecto copiose crapula. Depono casso voluptatem."
    },
    {
        "id": 80700,
        "user_id": 5507787,
        "title": "Vultuosus optio admoneo solium quibusdam tristis depromo tero varius.",
        "body": "Certo autem absconditus. Nisi concido peior. Laudantium cruentus comprehendo. Cruentus cura cubicularis. Aptus calculus vociferor. Curvo desidero molestiae. Circumvenio omnis administratio. Subiungo terminatio desidero. Verus comis decimus. Abstergo porro assumenda. Considero coadunatio celebrer. Argumentum aspernatur quia. Repudiandae odio quibusdam. Combibo vehemens coaegresco. Et theatrum ut. Ut aestus carpo."
    },
    {
        "id": 80699,
        "user_id": 5507786,
        "title": "Ter trucido dolores summopere suscipio aggero.",
        "body": "Vae titulus sapiente. Defaeco soluta tenus. Sodalitas textilis rerum. Venia aiunt vel. Antepono supellex tracto. Dolores tyrannus copiose. Conservo et et. Apostolus verumtamen cruentus. Canis claustrum decerno. Strenuus tot cimentarius. Quis pecunia compono. Stultus quia vero. Vel despirmatio et. Deduco qui aegrus. Defendo calcar universe. Aut vesco denego. Quis concedo vicinus. Accusator ventito ascit. Cerno ager comis."
    },
    {
        "id": 80697,
        "user_id": 5507783,
        "title": "Pax talus capto acervus torrens testimonium utique vito.",
        "body": "Concido pecco et. Recusandae ut vulpes. Ater corrigo tutis. Summopere capillus talus. Pariatur inflammatio soleo. Sumo et pax. Bellicus decipio trado. Vitiosus cervus alienus. Trepide sint celebrer. Hic consequatur uxor. Molestias sollers aeneus. Cenaculum acidus suffoco. Despirmatio theatrum cauda. Occaecati vox dolor. Calamitas et strues. Est debeo coniecto. Ait velit cognatus. Eaque eos reprehenderit. Alo arcus asperiores."
    },
    {
        "id": 80689,
        "user_id": 5507770,
        "title": "Cursus fuga attollo decumbo adopto sodalitas dicta campana acer.",
        "body": "Culpo voluptate textus. Supra varietas hic. Cogito sulum sol. Cilicium et conduco. Similique adfero pauci. Thymum maxime barba. Tracto arca spes. Damno quas supellex. Creber libero anser. Pecto via clibanus. Compello sum amplexus. Sophismata molestiae uredo. A amita sponte."
    },
    {
        "id": 80688,
        "user_id": 5507770,
        "title": "Caste quae curo culpa vulariter.",
        "body": "Aegre calcar careo. Cum antepono adstringo. Non adopto voluptas. Caput accendo curiositas. Absconditus virga vilicus. Amplitudo spes condico. Calculus avaritia custodia. A acquiro casso. Aro theatrum delego. Assentator ceno caecus."
    },
    {
        "id": 80687,
        "user_id": 5507768,
        "title": "Viriliter voluptatem asperiores rerum rerum tenetur.",
        "body": "Voluptas depopulo sapiente. Sui veritas dolorem. Sumo attonbitus virga. Civitas ascisco angelus. Temporibus templum atrocitas. Strenuus textus molestiae. Auris depromo despecto. Ancilla deleo tolero. Arcesso tempore aut. Cogo depopulo audacia. Tertius cito debilito."
    }
]

  const chunkArray = ({ arr, size }: { arr: any[]; size: number }) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedCards = chunkArray({ arr: array, size: 6 });
  console.log(chunkedCards.length);

  return (
    <section className="min-h-screen bg-primary max-w-screen">
      <div className="sm:px-8 max-w-[90vw] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true  }}
        >
          {chunkedCards.map((array, index) => (
            <SwiperSlide key={index} className="mb-8">
              <div className="grid gap-2 sm:gap-5 grid-cols-2 lg:grid-cols-3">
                {array.map((post, index)=>(
                  <Card post={post} key={index}/>
                ))}
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Post;
