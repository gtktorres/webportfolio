import '../styles/globals.css'
import LearnMore from '@/components/LearnMore';

export default function page() {
  return (
    <div>
      <main>
        <div className='container-home'>
          <div className='left'>
            <div style={{margin:"1rem", paddingLeft: "5rem", paddingTop: "5rem"}}><h2 style={{color:"hsla(240, 11%, 93%, 0.902)"}}>Working on proprietary software for Fidelity Information Services and Fullstack solutions for Strategic Legal Practices has given me a wealth of knowledge towards making your ideas functional.</h2></div>
          <div style={{margin:"1rem", padding:"5rem"}}><h2 style={{color:"hsla(240, 11%, 93%, 0.902)"}}>Consultations are free!</h2></div>
          <div className="my-button-home" style={{marginLeft:"6rem"}}>
            <LearnMore />
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
