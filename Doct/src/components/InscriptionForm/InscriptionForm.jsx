import Form from "react-bootstrap/Form";
import Groupdoct from "../../assets/Groupdoct.png";
import doctorWeb from "../../assets/doctorWeb.png";
import fichierWeb from "../../assets/fichierWeb.png";
import "./InscriptionForm.css";
import { FormLabel, Button } from "react-bootstrap";
import Navbaaaar from "../navbar2/nav";

const InscriptionForm = () => {
  return (
    <div>
      <div className="nav">
      <Navbaaaar />
      </div>
      
      <div className="my-hash">
        <h2 className="my-h2">Inscription fiche particien</h2>
        <p className="my-p">
          Remplissez ce formulaire pour créer votre fiche praticien
        </p>
      </div>
      <div className="forms">
        <div className="Aform">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <FormLabel>Gouvernorat</FormLabel>
            <Form.Select aria-label="Default select example">
              <option>Gouvernorat </option>
              <option value="1">Ariana</option>
              <option value="2">Beja</option>
              <option value="3">Ben arous</option>
              <option value="4">Bizerte</option>
              <option value="5">Gabes</option>
              <option value="6">Gafsa</option>
              <option value="7">Jendouba</option>
              <option value="8">Kairouan</option>
              <option value="9">Kasserine</option>
              <option value="10">Kebili</option>
              <option value="11">Le Kef</option>
              <option value="12">Mahdia</option>
              <option value="13">Mannouba</option>
              <option value="14">Medenine</option>
              <option value="15">Monastir</option>
              <option value="16">Nabeul</option>
              <option value="17">Sfax</option>
              <option value="18">Sidi bouzid</option>
              <option value="19">Siliana</option>
              <option value="20">Sousse</option>
              <option value="21">Tataouine</option>
              <option value="22">Touzer</option>
              <option value="23">Tunis</option>
              <option value="24">Zaghouan</option>
            </Form.Select>
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control className="nn" type="Name" placeholder="Taper votre Nom" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>address Email </Form.Label>
              <Form.Control className="nn" type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </div>
        <div className="Aform">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Spécialité *</Form.Label>
            <Form.Select aria-label="Default select example" className="mbb">
              <option>sélectionnez votr spécialité </option>
              <option value="13">Cardiologue</option>
              <option value="24">Chirurgien Esthétique</option>
              <option value="20">Chirurgien Orthopédiste Traumatologue</option>
              <option value="29">Dentiste</option>
              <option value="30">Dermatologue</option>
              <option value="33">Endocrinologue Diabétologue</option>
              <option value="35">Gastro-entérologue</option>
              <option value="36">Généraliste</option>
              <option value="39">Gynécologue Obstétricien</option>
              <option value="49">Interniste</option>
              <option value="154">
                Laboratoire d analyses de biologie médicale
              </option>
              <option value="62">Néphrologue</option>
              <option value="64">Neurologue</option>
              <option value="65">Nutritionniste</option>
              <option value="66">Ophtalmologiste</option>
              <option value="70">Oto-Rhino-Laryngologiste (ORL)</option>
              <option value="72">Pédiatre</option>
              <option value="78">Pneumologue</option>
              <option value="93">Psychiatre</option>
              <option value="94">Psychothérapeute</option>
              <option value="80">Radiologue</option>
              <option value="87">Rhumatologue</option>
              <option value="95">Sexologue</option>
              <option value="92">Urologue</option>

              <optgroup value="0" label="Autres spécialités">
                <option value="111">Acupuncture</option>
                <option value="120">Addictologue</option>
                <option value="121">Algologue</option>
                <option value="89">Allergologue</option>
                <option value="1">Anatomo-Cyto-Pathologiste</option>
                <option value="122">Andrologue</option>
                <option value="2">Anesthésiste-Réanimateur</option>
                <option value="3">Angiologue</option>
                <option value="160">Audiologiste</option>
                <option value="106">Audioprothésiste</option>
                <option value="172">Auriculothérapeute</option>
                <option value="6">Biochimiste</option>
                <option value="4">Biochimiste Clinique</option>
                <option value="5">Biologiste Medicale</option>
                <option value="10">Biophysique</option>
                <option value="12">Cancérologue</option>
                <option value="179">Cardiologue pédiatrique</option>
                <option value="153">Centre d imagerie médicale</option>
                <option value="161">Chiropracteur</option>
                <option value="182">
                  Chirurgie Arthroscopique et du Sport
                </option>
                <option value="158">Chirurgie plastique et réparatrice</option>
                <option value="26">Chirurgien</option>
                <option value="178">Chirurgien Buccal</option>
                <option value="14">Chirurgien Cancérologue</option>
                <option value="143">Chirurgien capillaire</option>
                <option value="15">Chirurgien Cardio-Vasculaire</option>
                <option value="16">
                  Chirurgien Cardio-Vasculaire Thoracique
                </option>
                <option value="177">Chirurgien cervico-facial</option>
                <option value="133">Chirurgien de l obésité</option>
                <option value="17">Chirurgien Généraliste</option>
                <option value="151">
                  Chirurgien Maxillo Facial et Esthétique
                </option>
                <option value="91">
                  Chirurgien Maxillo Facial Stomatologue
                </option>
                <option value="174">Chirurgien Orthopédiste Pédiatrique</option>
                <option value="21">Chirurgien Pédiatrique</option>
                <option value="22">Chirurgien Plasticien</option>
                <option value="27">Chirurgien Thoracique</option>
                <option value="25">Chirurgien Urologue</option>
                <option value="144">Chirurgien vasculaire</option>
                <option value="132">Chirurgien viscéral et digestif</option>
                <option value="31">Diabétologue</option>
                <option value="101">Diététicien</option>
                <option value="43">Embryologiste</option>
                <option value="32">Endocrinologue</option>
                <option value="150">Endodontiste</option>
                <option value="137">Epidemiologiste</option>
                <option value="142">Ergothérapeute</option>
                <option value="117">Généticien</option>
                <option value="102">Gériatre</option>
                <option value="41">Hématologue</option>
                <option value="42">Hématologue Clinique</option>
                <option value="7">Hématopathologiste</option>
                <option value="110">Hépatologue</option>
                <option value="116">Hypnothérapeute</option>
                <option value="44">Imagerie Médicale</option>
                <option value="45">Immunologiste</option>
                <option value="8">Immunopathologiste</option>
                <option value="152">Implantologue</option>
                <option value="149">Infirmier</option>
                <option value="176">Interniste Hypertensiologue</option>
                <option value="50">Interniste Maladies Infectieuses</option>
                <option value="51">Interniste Réanimation Médicale</option>
                <option value="46">Kinésithérapeute</option>
                <option value="155">
                  Laboratoire d anatomie et cytologie pathologiques
                </option>
                <option value="156">Laboratoire de cytogénétique</option>
                <option value="173">Maladies Cardiovasculaire</option>
                <option value="47">Maladies Infectieuses</option>
                <option value="59">Médecin Biologiste</option>
                <option value="162">Médecin de famille</option>
                <option value="168">Médecin du sommeil</option>
                <option value="118">Médecin du sport</option>
                <option value="48">Médecin du Travail</option>
                <option value="96">Médecin Esthétique</option>
                <option value="157">Médecin Hémodialyseur</option>
                <option value="123">Médecin homéopathe</option>
                <option value="52">Médecin Légiste</option>
                <option value="53">Médecin Nucléaire</option>
                <option value="55">Médecin Physique Réadaptateur</option>
                <option value="124">Médecin urgentiste</option>
                <option value="125">Médecine douce et alternative</option>
                <option value="126">Médecine morphologique et anti-âge</option>
                <option value="57">Médecine Préventive</option>
                <option value="146">Médecine tropicale</option>
                <option value="9">Microbiologiste</option>
                <option value="61">Néonatologiste</option>
                <option value="18">Neurochirurgien</option>
                <option value="171">Neuropédiatre</option>
                <option value="169">Neurophysiologiste</option>
                <option value="127">Neuropsychiatre</option>
                <option value="167">Neuropsychologue</option>
                <option value="159">Nutrithérapeute</option>
                <option value="164">Oncologue</option>
                <option value="145">Oncologue-Chimiothérapeute</option>
                <option value="85">Oncologue-Radiothérapeute</option>
                <option value="128">Opticien</option>
                <option value="67">Orthodontiste</option>
                <option value="100">Orthophoniste</option>
                <option value="175">Orthoprothésiste</option>
                <option value="104">Orthoptiste</option>
                <option value="115">Ostéopathe</option>
                <option value="71">Parasitologiste</option>
                <option value="119">Parodontiste implantologiste</option>
                <option value="74">Pédodontiste</option>
                <option value="73">Pédopsychiatre</option>
                <option value="166">Perineologue</option>
                <option value="136">Pharmacien</option>
                <option value="97">Pharmacien Biologiste</option>
                <option value="129">Pharmacologue</option>
                <option value="108">Phlébologue</option>
                <option value="76">Physiologiste</option>
                <option value="99">Physiothérapeute</option>
                <option value="134">Phytothérapeute</option>
                <option value="107">Podologue</option>
                <option value="138">Posturologue</option>
                <option value="109">Proctologue</option>
                <option value="165">Prothésiste Capillaire</option>
                <option value="103">Prothésiste dentaire</option>
                <option value="113">Psychanalyste</option>
                <option value="79">Psychologue</option>
                <option value="170">Psychologue clinicien</option>
                <option value="112">Psychomotricien</option>
                <option value="84">Radiothérapeute</option>
                <option value="86">Réanimateur Médical</option>
                <option value="135">Réflexologue</option>
                <option value="180">Rythmologue interventionnel</option>
                <option value="130">Sage femme</option>
                <option value="131">Santé publique et médecine sociale</option>
                <option value="147">Sénologue</option>
                <option value="90">Stomatologue</option>
                <option value="181">Thérapeute manuel</option>
                <option value="148">Urodynamique</option>
                <option value="163">Vétérinaire</option>
              </optgroup>
            </Form.Select>
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prénom</Form.Label>
              <Form.Control className="nn" type="Prénom" placeholder="Taper votre Prénom" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Téléphone Mobile</Form.Label>
              <Form.Control
              className="nn"
                type="Téléphone Mobile"
                placeholder="Taper votre numéro de Téléphone"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="my-f-b">
        <Form.Check
          aria-label="option 1"
          type="checkbox"
          className="my-check"
        />
        <label className="form">
          J accepte les
          <a 
            target="_blank"
            rel="noreferrer"
          >
            <b className="gg"> CGU </b>
          </a>{" "}
          ainsi que{" "}
          <a
            
            target="_blank"
            rel="noreferrer"
          >
            <b className="charte">la charte de Doct</b>
          </a>
        </label>
      </div>
      <Button
        className="my-button"
        as="input"
        type="submit"
        value="Soumettre Ma Demande"
      />{" "}
      <img src={Groupdoct} alt="image0" href="/" className="groupDoct"></img>
      <h1 className="se-passe">Comment ca se passe ?</h1>
      <p className="passe-p">Votre inscription en 2 étapes</p>
      <div className="fich-doc">
        <div className="doctor-div">
          <img src={doctorWeb} alt="" className="doctor-web" />
          <p className="paragraph">Publication du Profil</p>
          <p className="para">
            Création de votre fiche, incluant : Adresse, photo, numéro de
            téléphone, géolocalisation, spécialité
          </p>
        </div>
        <div className="fichier-div">
          <img src={fichierWeb} alt="" className="fichier-web" />
          <p className="paragraph">Référencement au Listing</p>
          <p className="para">
            Listing aléatoire de votre fiche suivant la géolocalisation, la
            spécialité ou la localité
          </p>
        </div>
      </div>
    </div>
  );
};

export default InscriptionForm;
