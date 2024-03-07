import React from "react";
import { useParams } from "react-router-dom";
import "./SubjectSelector.css";
import { Link } from "react-router-dom";
const syllabusData = {
  JHS11212019: `
   <div  className="content bg-primary">
   <strong style="color: black">UNIT I Basic Grammar I and Reading for information:</strong> 
      - Parts of speech - Sentence patterns – Tenses - Wh- questions - Yes/no questions - Countable 
      and Uncountable nouns - Affixation – word formation; Reading short comprehension 
      passages - practice in skimming and scanning for specific information and note-making, 
      Critical reading - finding key information in a given text - shifting facts from opinions and 
      paraphrasing 
      <br>
    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Listening to documentaries, inspiring speeches of great leaders, news bulletins, Ted talks, 
      telephonic conversations 
    
      <br>
      <br>

    <strong style="color: black">UNIT II Basic Grammar I and Sharing Information:</strong> 
      - Pronouns - Adjectives - Adverbs - Imperatives - Direct and indirect questions - Compound 
      words - Guessing meaning of words in contexts – one word substitutes; Autobiographical 
      writing (writing about one’s leisure time activities, hometown, favourite place and school 
      life) – Biographical writing (place, people), Letter writing (informal letters) 
      <br>
    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Self-introduction, peer introduction, picture description, JAM 
      <br>
      <br>

    <strong style="color: black">UNIT III Basic Grammar III and Free Writing I:</strong> 
      - Conjunctions – Prepositions - Articles - Degrees of comparison – Discourse markers - 
      Reference words; Process description, Coherence and cohesion in writing cause and 
      effect / compare & contrast / narrative / analytical paragraphs 
      <br>
    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Language functions: Giving reasons, talking about future plans, comparing and 
      contrasting, making suggestions 
      <br>
      <br>


    <strong style="color: black">UNIT IV Basic Grammar IV and Language Development:</strong> 
      - Subject-verb agreement - Modal verbs - Phrasal verbs - Single word substitutes - Use of 
      abbreviations & acronyms - Cloze reading - Interpreting visual material, Jumbled 
      sentences 
      <br>
    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Interpersonal Skills: role play, group discussion, debate, conduct of meeting 
      <br>
      <br>

    <strong style="color: black">UNIT V Basic Grammar V and Free Writing II:</strong> 
      - Clause - Direct and indirect speech – Correction of errors - Word association 
      (connotations) - Lexical items (fixed / semi fixed expressions) - Essay writing – different 
      types of essays, dialogue writing 
      <br>
    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Creative writing and speaking skills: Poster making and description, project proposals
      <br>
      <br>
   </div>
  `,
  JMA11012019: `
  <strong style="color: black">UNIT I MATRICES:</strong>
    Eigenvalues and Eigenvectors of a real matrix – Characteristic equation – Properties of 
    Eigenvalues and Eigenvectors – Cayley-Hamilton theorem – Diagonalization of matrices by 
    similarity and orthogonal transformations – Reduction of a quadratic form to canonical 
    formNature of quadratic forms.
    
  <br /><br />
  <strong style="color: black">UNIT II FUNCTIONS OF SEVERAL VARIABLES:</strong>
    Partial differentiation – Total derivative – Jacobians – Taylor’s series for functions of two 
    variables – Maxima and minima of functions of two variables – Lagrange’s method of 
    undetermined multipliers.
  
  <br /><br />
  <strong style="color: black">UNIT III APPLICATIONS OF DIFFERENTIAL CALCULUS:</strong>
    Curvature and radius of curvature – Circle of curvature – Evolutes – Envelopes – Evolute as 
    envelope of normals.
  
  <br /><br />
  <strong style="color: black">UNIT IV APPLICATIONS OF INTEGRAL CALCULUS:</strong>
    Multiple integrals: Double integrals – Change of order of integration – Change of variables 
    – Area enclosed by plane curves – Triple integrals – Volume of solids.
    Improper integrals: Beta and Gamma Integrals – Definitions and properties – Simple 
    problems.
  
  <br /><br />
  <strong style="color: black">UNIT V ORDINARY DIFFERENTIAL EQUATIONS:</strong>
    Higher order linear differential equations with constant coefficients – Method of variation 
    of parameters – Method of undetermined coefficients - Homogeneous equation of Euler’s 
    and Legendre’s type – System of simultaneous first order linear differential equations with 
    constant coefficients.
`,
  JPH11012019: `
<h2 style="color: black">ENGINEERING PHYSICS</h2> 
<br /><br /> 
<strong style="color: black">UNIT I CRYSTAL PHYSICS:</strong> 
Single crystal, Polycrystalline and Amorphous materials – Single Crystals: Unit cell, Crystal 
systems, Bravais lattices, Directions and Planes in a crystal, Miller indices – Inter planar 
distances – Coordination number and Packing factor for SC, BCC, FCC, HCP and Diamond 
structures - Crystal imperfections: Point defects, Line defects – Burgers vector, Stacking 
faults 

<br /><br />
<strong style="color: black">UNIT II PROPERTIES OF MATTER:</strong> 
Elasticity – Stress-strain diagram and its uses - factors affecting elastic moduli and tensile 
strength – torsional stress and deformations – twisting couple - torsion pendulum: theory 
and experiment - bending of beams - stress due to bending in beams - bending moment – 
cantilever: theory and experiment – uniform and non-uniform bending: theory and 
experiment 

<br /><br />
<strong style="color: black">UNIT III ULTRASONICS:</strong> 
Production of ultrasound by Magnetostriction effect and Piezoelectric effect Detection of 
ultrasonic wave – Properties of ultrasonic wave – Acoustic grating - Industrial applications 
– Drilling, Welding, Soldering and Cleaning – SONAR - Non Destructive Testing – Pulse 
echo system through Transmission and Reflection modes- A, B and C–scan displays. 

<br /><br />
<strong style="color: black">UNIT IV PHOTONICS AND FIBRE OPTICS:</strong> 
Spontaneous and stimulated emission-Population inversion -Einstein’s A and B coefficients 
derivation – Laser Principle - Semiconductor lasers (homojunction & heterojunction)- 
Optical Fiber: types (material, refractive index, mode) - Propagation of light in optical 
fibers – Numerical aperture and Acceptance angle –attenuation, dispersion, bending -Fiber 
Optical Communication system (Block diagram) -Active and passive fiber sensors-Endoscope. 

<br /><br />
<strong style="color: black">UNIT V QUANTUM PHYSICS:</strong>
Black body radiation –Planck’s theory (derivation) –Deduction of Wien’s displacement law 
and Rayleigh –Jeans’ Law from Planck’s theory –Compton effect-theory –Properties of 
Matter waves –G.P Thomson experiment -Schrödinger's wave equation –Time independent 
and time dependent equations –Physical significance of wave function –Particle in a one 
dimensional box -Scanning electron microscope -Transmission electron microscope
`,
  JGE11012019: `
<h2 style="color: black">ENGINEERING BASICS</h2>

<strong style="color: black">UNIT 1 BASICS OF CIVIL ENGINEERING:</strong>
Introduction to Civil Engineering, Types of buildings, Components of a residential building,
Building Materials, Types of slabs, beam, column, lintel, floor and foundation - Types of roofs.
Surveying and Levelling - Linear and Angular Measurements - Introduction to transport system,
role of transportation in society - Green Highway. Sources of water, Hydrological cycle,
Irrigation Engineering, Rainwater harvesting, Environmental pollution, Greenhouse gas
emission, Ozone depletion, Global warming - Green building concepts.

<br /><br />
<strong style="color: black">UNIT 2 BASICS OF MECHANICAL ENGINEERING:</strong>
Introduction to the concepts of Mechanization and Automation, Robotics - Manufacturing
methods - casting, machining, forming operations, Introduction to IC Engine - Working
principles of four-stroke petrol and diesel engines, Types of power plants - Hydel power plant
and thermal power plant, Steam generators - Fire tube boiler and water tube boiler, Thermal
systems - Heat exchangers, Radiator and oil cooler, Design of ingenious mechanisms - Parts
feeding mechanism.

<br /><br />
<strong style="color: black">UNIT 3 ELECTRIC CIRCUITS AND ELECTRICAL MACHINES:</strong>
Basic circuit components - Ohm's Law - Kirchhoff’s Law-Introduction to AC circuits-waveforms
and RMS value - Power and power factor-Principles of operation and characteristics of DC
machines-Transformers-Three phase and single-Phase induction motors.

<br /><br />
<strong style="color: black">UNIT 4 ELECTRONIC DEVICES & CIRCUITS:</strong>
Types of Materials - Silicon & Germanium - N type and P type materials - Construction
and Characteristics: PN Junction diode - Zener Diode - Bipolar Junction Transistor - Field
effect Transistors - IGBT - Introduction to operational amplifier - Inverting Amplifier -
Non-inverting Amplifier.

<br /><br />
<strong style="color: black">UNIT 5 MEASUREMENTS & INSTRUMENTATION:</strong>
Elements of generalized measurement system - Basic terminologies: Accuracy, precision,
resolution, sensitivity, linearity, span and range - Errors in measurement - Standards of
measurement - calibration - Operating forces: Deflection force, controlling force, damping
force - Classification of instruments.
`,
  JGE11022019: `
<h2 style="color: black">PROGRAMMING IN C</h2> 

<strong style="color: black">UNIT I INTRODUCTION TO PROBLEM SOLVING:</strong> 
Simple model of a Computer – Hardware – Software – Data Representation, Problem 
Solving Techniques – Bottom up design and top down design - applications, Introduction to 
Algorithms and Flow Chart - Notion of memory, addresses, variables, instructions, 
execution of instruction- Operating system commands, file editing, compiling, linking, 
executing a program. 

<br /><br />
<strong style="color: black">UNIT II C PROGRAMMING:</strong> 
Introduction to ‘C’ programming – structure of a ‘C’ program – compilation and linking 
processes. Conversion of simple algorithm to program-Constants, Variables – Data Types – 
Expressions using operators in ‘C’ – Managing Input and Output operations – Decision 
Making and Branching – Looping statements – solving simple scientific and statistical 
problems 

<br /><br />
<strong style="color: black">UNIT III ARRAYS AND STRINGS:</strong> 
Arrays – Initialization – Declaration – One dimensional and two dimensional arrays - 
String- String operations –Arrays of strings. 

<br /><br />
<strong style="color: black">UNIT IV FUNCTIONS AND USER DEFINED DATA TYPES:</strong> 
Function – definition of function – Declaration of function – Pass by value - Pass by 
reference–Command Line Argument in C-- Recursion - Enumerators – Structures 
- Unions. 

<br /><br />
<strong style="color: black">UNIT V POINTERS AND FILES:</strong> 
Macros - storage classes - Pointers- Definition – Initialization – Pointers arithmetic – 
Double Pointers, Basic file operations-Example problems.
`,
  JCY11012019: `
<h2 style="color: black">ENGINEERING CHEMISTRY</h2> 



<strong style="color: black">UNIT I: PHOTOCHEMISTRY AND ANALYTICAL TECHNIQUES:</strong> 
Photochemistry- Laws of photochemistry - Grotthuss–Draper law, Stark–Einstein law and 
Lambert-Beer Law (problems). Photo processes - Internal Conversion, Inter-system 
crossing, Fluorescence and its applications in medicine – PhosphorescenceChemiluminescence and Photo-sensitization. 

Analytical Techniques – UV-visible spectroscopy – principles – instrumentation (block 
diagram only) – Colorimetry- Principle-Instrumentation, estimation of iron by colorimetry – 
Flame photometry – principle – Instrumentation – estimation of sodium by Flame 
photometry. 

<br /><br />
<strong style="color: black">UNIT II WATER TECHNOLOGY:</strong> 
Hardness-Units of Hardness- Temporary hardness-Permanent hardness- Estimation 
hardness by EDTA method- Alkalinity – Types- water quality parameters (pH, EC, TDS, 
DO, BOD, COD) –- Boiler feed water-requirements- boiler troubles (scale and sludgecaustic embrittlement-boiler corrosion-priming and foaming) - softening of hard water -
external treatment (zeolite and demineralization) - internal treatment (phosphate, calgon, 
carbonate, colloidal) -- desalination of brackish water –reverse osmosis. 

<br /><br />
<strong style="color: black">UNIT III ELECTROCHEMISTRY AND CORROSION:</strong> 
Electrochemistry- Electrochemical cell - redox reaction, electrode potential- oxidation 
potential- reduction potential, measurement and applications - electrochemical series and its 
significance - Nernst equation (derivation and problems). 

Corrosion- causes- types-chemical, electrochemical corrosion- galvanic corrosiondifferential aeration corrosion ( pitting, waterline, wire fence, pipeline, crevice, stress 
corrosion), Factors influencing the rate of corrosion- corrosion control - material selection 
and design aspects – cathodic protection methods (sacrificial anode and impressed current 
cathodic methods)- Electroplating of Copper and electroless plating of nickel-corrosion 
inhibitors (anodic and cathodic inhibitors). 

<br /><br />
<strong style="color: black">UNIT IV POLYMER , COMPOSITES AND ENERGY STORAGE DEVICES:</strong> 
Introduction- Classification of polymers – Natural and synthetic; Thermoplastic and 
Thermosetting. Functionality – Degree of polymerization.. Biodegradable polymer- Typessynthetic methods – applications of biodegradable polymers. Polymer composites and its 
application. 

Energy Storage Devices - Batteries and fuel cells: Types of batteries – primary battery (dry 
cell) secondary battery (lead acid battery, nickel-cadmium battery, lithium-ion-battery). 
Fuel cell – H2-O2 fuel cell- solid oxide fuel cell - polymer electrolyte membrane fuel cell 
(PEMFC) applications. 

<br /><br />
<strong style="color: black">UNIT V ENGINEERING MATERIALS AND NANOCHEMISTRY:</strong> 
Engineering Materials- Refractories – classification – acidic, basic and neutral refractories 
– properties (refractoriness, refractoriness under load, dimensional stability, porosity, 
thermal spalling) – manufacture of alumina, magnesite and zirconia bricks. cement- 
manufacture and properties - setting and hardening of cement, special cementwaterproof and white cement–properties and uses. 

Nanochemistry– Introduction – distinction between molecules, nanoparticles and bulk 
materials; Synthesis: precipitation, thermolysis, hydrothermal, solvothermal, 
electrodeposition, chemical vapour deposition, laser ablation; Properties and applications. 
`,

  JGE11122019: `
<h2 style="color: black">Programming in C Laboratory</h2> 
<br />
<strong style="color: black">LIST OF PROGRAMS:</strong> <br />
1. Usage of Basic Linux commands <br />
2. C Programming using Simple statements and expressions <br />
3. Scientific problem solving using decision making and looping. <br />
4. Simple programming for one dimensional and two-dimensional arrays. <br />
5. Solving problems using Strings <br />
6. C Programming using Pointers <br />
7. C Programming using user-defined functions (Pass by value and Pass by reference) <br />
8. C Programming using Recursion <br />
9. C Programming using structures and union <br />
10. C Programming using enumerated data types <br />
11. C Programming using macros and storage classes <br />
12. C Programming using Files <br />
`,

  JPC11112019: `
<h2 style="color: black">Physics and Chemistry Laboratory</h2> 


<strong style="color: black">LIST OF EXPERIMENTS:</strong> 
<strong style="color: black">Physics</strong><br />
1. Determination of Young’s modulus for the given uniform bar by uniform 
bending method <br />
2. Determination of wavelength of the diode laser and hence determine the size of 
the coated powder particle <br />
3. Determination of velocity of Ultrasound using Ultrasonic interferometer and 
also find the compressibility of the given liquid <br />
4. Determination of moment of inertia of the given circular disc and rigidity 
modulus of the metal wire using torsional pendulum <br />
5. Determination of Planck’ constant using different color filters <br />
6. Determination of Wavelength of spectral lines in mercury spectrum using 
spectrometer <br />
7. Analysis of I-V Characterization of Solar cell 
<br /><br />

<strong style="color: black">LIST OF EXPERIMENTS</strong>
<strong style="color: black">Chemistry</strong><br />
1. Estimation of HCl using Na2CO3 as primary standard and Determination of 
alkalinity in water samples. <br />
2. Determination of total, temporary & permanent hardness of water by EDTA method. <br />
3. Determination of DO content of water sample by Winkler‘s method. <br />
4. Determination of chloride content of water sample by argentometric method. <br />
5. Estimation of copper in brass by Iodometry. <br />
6. Determination of molecular weight of polyvinyl alcohol using Ostwald viscometer.<br />
`,

  JGE11112019: `
<h2 style="color: black">DESIGN APPRECIATION LABORATORY</h2> 
<br /><br />


<strong style="color: black">GROUP A (CIVIL & MECHANICAL):</strong>

<strong style="color: black">I CIVIL ENGINEERING PRACTICE:</strong> 13 
Buildings: 
- Study of plumbing and carpentry components of residential and industrial buildings. 
Safety aspects. 
Plumbing Works: 
- Study of pipeline joints, its location and functions: valves, taps, couplings, unions, 
 reducers, elbows in household fittings. 
- Study of pipe connections requirements for pumps and turbines. 
- Preparation of plumbing line sketches for water supply and sewage works. 
- Hands-on-exercise: Basic pipe connections - Mixed pipe material connection - Pipe 
 connections with different joining components. 
- Demonstration of plumbing requirements of high-rise buildings. 
Carpentry using Power Tools only: 
- Study of the joints in roofs, doors, windows and furniture. 
- Hands-on-exercise: Wood work, joints by sawing, planing and cutting. 
<br /><br />

<strong style="color: black">MECHANICAL ENGINEERING PRACTICE:</strong> 18 
Welding: 
- Preparation of butt joints, lap joints and T- joints by Shielded metal arc welding. 
- Gas welding practice 
Basic Machining: 
- Simple Turning and Taper turning 
- Drilling Practice 
Sheet Metal Work: 
- Forming & Bending: 
- Model making - Trays and funnels. 
- Different type of joints.
Machine Assembly Practice: 
- Study of centrifugal pump 
- Study of air conditioner 
Demonstration on: 
- Smithy operations, upsetting, swaging, setting down and bending. Example - 
 Exercise - Production of hexagonal headed bolt. 
- Foundry operations like mould preparation for gear and step cone pulley. 
- Fitting - Exercises - Preparation of square fitting and V - fitting models. 
<br /><br />

<strong style="color: black">GROUP B (ELECTRICAL & ELECTRONICS):</strong>

<strong style="color: black">I ELECTRICAL ENGINEERING PRACTICE:</strong> 13
1. Residential house wiring using switches, fuse, indicator, lamp and energy meter. 
2. Fluorescent lamp wiring. 
3. Stair case wiring 
4. Measurement of electrical quantities - voltage, current, power & power factor in 
 RLC circuit. 
5. Measurement of energy using single phase energy meter. 
6. Measurement of resistance to earth of electrical equipment. 
<br /><br />

<strong style="color: black">II ELECTRONICS ENGINEERING PRACTICE:</strong> 16 
1. Study of Electronic components and equipments - Resistor, colour coding 
 measurement of AC signal parameter (peak-peak, rms period, frequency) using CR. 
2. Study of logic gates AND, OR, EX - OR and NOT. 
3. Generation of Clock Signal. 
4. Soldering practice - Components Devices and Circuits - Using general purpose PCB. 
5. Measurement of ripple factor of HWR and FWR.
`,

  // Add more syllabus content for other subject codes as needed

  //
};
import Sem from "./Syllabus/CseSyllabus/Sem";
const Testing = () => {
  const { subjectCode, department, semester } = useParams();

  console.log("he");
  console.log(useParams());

  var syllabus = syllabusData[subjectCode];
  syllabus = <Sem semm={semester} />;

  const subject = subjectCode.slice(0, 7);
  return (
    <div className="containter p-5 content">
      <div className="previous-btn">
        <Link to={`/department/${department}`}>
          &lt; Back to Department {department}
        </Link>
      </div>
      <div className="subject-content">
        <h2 className="hello">Syllabus for {subject}</h2>
        <Sem semm={semester} />

        {/* <div dangerouslySetInnerHTML={{ __html: syllabus }}></div> */}
      </div>
    </div>
  );
};

export default Testing;
