export default function ConversationDetail() {
  return (
    <>
      <div className="flex items-center">
        <img
          src="img/catherine.jpeg"
          className="w-[75px] m-2 rounded-full shadow-lg"
        />
        <div className="ml-8 font-bold text-2xl">Catherine L.</div>
      </div>
      <div className="flex flex-col">
        <div className="max-w-[80%] bg-fuchsia-200 p-3 m-3 text-lg rounded-xl shadow-md ml-auto">
          Salut belle brune
        </div>
        <div className="max-w-[80%] bg-neutral-200 p-3 m-3 text-lg rounded-xl shadow-md mr-auto">
          Bonjour Thierry, comment allez vous ?
        </div>
        <div className="max-w-[80%] bg-fuchsia-200 p-3 m-3 text-lg rounded-xl shadow-md ml-auto">
          Très bien, avec le beau temps... j’en au profité pour planter mes
          belles tomates coeurs de boeuf
        </div>
        <div className="max-w-[80%] bg-neutral-200 p-3 m-3 text-lg rounded-xl shadow-md mr-auto">
          Quelle belle nouvelle. Je suis actuellement en mi-temps thérapeuthique
          suite à des soucis avec un collègue qui m’a harcelé au travail.
        </div>
        <div className="max-w-[80%] bg-neutral-200 p-3 m-3 text-lg rounded-xl shadow-md mr-auto">
          Une fois il m’a appelé “Catherine la rustine”, parce qu’il adorait la
          mécanique alors ca le faisait rire, et notre N+1 également. Et suite à
          ça il n’arrêtait pas de déposer sa tasse à café sur mon bureau, que
          qui faisait des marques que je devais nettoyer car je suis très
          maniaque. Mais je n’y suis pour rien, c’est mon éducation, c’est comme
          ca je lui ai dit parce que ma mère faisait des ménages chez la voisine
          qui était la nièce de la dame qui me gardait quand nous étions petites
          avec ma soeur
        </div>
        <div className="max-w-[80%] bg-fuchsia-200 p-3 m-3 text-lg rounded-xl shadow-md ml-auto">
          Trop triste comme histoire... tu veux en parler autour d’un verre peut
          être..?
        </div>
        <div className="max-w-[80%] bg-neutral-200 p-3 m-3 text-lg rounded-xl shadow-md">
          Avec plaisir mais je dois vous prévenir, je suis intolérante au gluten
          depuis que j’ai pris peur dans la rue en novembre dernier après qu’un
          chat noir traverse la rue devant moi et me fasse sursauter.
        </div>
        <div className="max-w-[80%] bg-fuchsia-200 p-3 m-3 text-lg rounded-xl shadow-md ml-auto">
          Pas de soucis... j’ai du Ricard à la maison... 2 doigts, des
          glaçons... ensuite de l’eau bien fraîche... un petit 33 tours de ZZ
          Top...
        </div>
        <div className="max-w-[80%] bg-fuchsia-200 p-3 m-3 text-lg rounded-xl shadow-md ml-auto">
          Une belle soirée qui s’annonce
        </div>
        <div className="max-w-[80%] bg-neutral-200 p-3 m-3 text-lg rounded-xl shadow-md">
          J’ai si hate Thierry. Merci infiniment pour ce beau programme !
        </div>
      </div>
    </>
  );
}

// import { useParams } from 'react-router-dom';

// function ConversationDetail() {
//   const { id } = useParams();
//   const conversation = {
//     1: { user: 'Alice', messages: ['Hi!', 'How are you?'] },
//     2: { user: 'Bob', messages: ['Hello!', 'What\'s up?'] }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl">Conversation with {conversation[id].user}</h2>
//       <ul>
//         {conversation[id].messages.map((msg, index) => (
//           <li key={index}>{msg}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ConversationDetail;
