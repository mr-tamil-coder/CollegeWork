import React from "react";
import { useParams } from "react-router-dom";

const syllabusData = {
  JHS11212019: `
    <strong style="color: black">UNIT I Basic Grammar I and Reading for information:</strong> 
      - Parts of speech - Sentence patterns – Tenses - Wh- questions - Yes/no questions - Countable 
      and Uncountable nouns - Affixation – word formation; Reading short comprehension 
      passages - practice in skimming and scanning for specific information and note-making, 
      Critical reading - finding key information in a given text - shifting facts from opinions and 
      paraphrasing 

    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Listening to documentaries, inspiring speeches of great leaders, news bulletins, Ted talks, 
      telephonic conversations 

    <strong style="color: black">UNIT II Basic Grammar I and Sharing Information:</strong> 
      - Pronouns - Adjectives - Adverbs - Imperatives - Direct and indirect questions - Compound 
      words - Guessing meaning of words in contexts – one word substitutes; Autobiographical 
      writing (writing about one’s leisure time activities, hometown, favourite place and school 
      life) – Biographical writing (place, people), Letter writing (informal letters) 

    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Self-introduction, peer introduction, picture description, JAM 

    <strong style="color: black">UNIT III Basic Grammar III and Free Writing I:</strong> 
      - Conjunctions – Prepositions - Articles - Degrees of comparison – Discourse markers - 
      Reference words; Process description, Coherence and cohesion in writing cause and 
      effect / compare & contrast / narrative / analytical paragraphs 

    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Language functions: Giving reasons, talking about future plans, comparing and 
      contrasting, making suggestions 

    <strong style="color: black">UNIT IV Basic Grammar IV and Language Development:</strong> 
      - Subject-verb agreement - Modal verbs - Phrasal verbs - Single word substitutes - Use of 
      abbreviations & acronyms - Cloze reading - Interpreting visual material, Jumbled 
      sentences 

    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Interpersonal Skills: role play, group discussion, debate, conduct of meeting 

    <strong style="color: black">UNIT V Basic Grammar V and Free Writing II:</strong> 
      - Clause - Direct and indirect speech – Correction of errors - Word association 
      (connotations) - Lexical items (fixed / semi fixed expressions) - Essay writing – different 
      types of essays, dialogue writing 

    <strong style="color: black">SOFT SKILLS LAB:</strong> 
      - Creative writing and speaking skills: Poster making and description, project proposals
  `,
  JMA11012019: `
  <strong style="color: black">UNIT I MATRICES:</strong>
    Eigenvalues and Eigenvectors of a real matrix – Characteristic equation – Properties of 
    Eigenvalues and Eigenvectors – Cayley-Hamilton theorem – Diagonalization of matrices by 
    similarity and orthogonal transformations – Reduction of a quadratic form to canonical 
    formNature of quadratic forms.

  <strong style="color: black">UNIT II FUNCTIONS OF SEVERAL VARIABLES:</strong>
    Partial differentiation – Total derivative – Jacobians – Taylor’s series for functions of two 
    variables – Maxima and minima of functions of two variables – Lagrange’s method of 
    undetermined multipliers.

  <strong style="color: black">UNIT III APPLICATIONS OF DIFFERENTIAL CALCULUS:</strong>
    Curvature and radius of curvature – Circle of curvature – Evolutes – Envelopes – Evolute as 
    envelope of normals.

  <strong style="color: black">UNIT IV APPLICATIONS OF INTEGRAL CALCULUS:</strong>
    Multiple integrals: Double integrals – Change of order of integration – Change of variables 
    – Area enclosed by plane curves – Triple integrals – Volume of solids.
    Improper integrals: Beta and Gamma Integrals – Definitions and properties – Simple 
    problems.

  <strong style="color: black">UNIT V ORDINARY DIFFERENTIAL EQUATIONS:</strong>
    Higher order linear differential equations with constant coefficients – Method of variation 
    of parameters – Method of undetermined coefficients - Homogeneous equation of Euler’s 
    and Legendre’s type – System of simultaneous first order linear differential equations with 
    constant coefficients.
`,
// Add more syllabus content for other subject codes as needed
};

const Testing = () => {
  const { subjectCode } = useParams();
  const syllabus = syllabusData[subjectCode];

  return (
    <div>
      <h2>Syllabus for {subjectCode}</h2>
      <pre>
        <div dangerouslySetInnerHTML={{ __html: syllabus }}></div>
      </pre>
    </div>
  );
};

export default Testing;
