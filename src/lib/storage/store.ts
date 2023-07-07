export default {
  store: {
    name: "",
    raw: ``,
    obfuscated: `
  <obfuscated>
      <todo>
          Enter file to anonymise
      </todo>
      <config>
          <feature>Implement new unique keys</feature>
          <feature>Randomise data</feature>
          <feature>Remove fields</feature>
      </config>
  </obfuscated>
  `,
  },
  config: {
    keys: [
      {
        key: "COURSEID",
        replace: "C0",
      },
      {
        key: "MODID",
        replace: "MOD0",
      },
      {
        key: "QUALID",
        replace: "Q0",
      },
      {
        key: "OWNSESSIONID",
        replace: "OS0",
      },
      {
        key: "SID",
        replace: "1234567890000",
      },
      {
        key: "VENUEID",
        replace: "V0",
      },
      {
        key: "COURSEREFRNCID",
        replace: "CR0",
      },
      {
        key: "NUMHUS",
        replace: "NH0",
      },
      {
        key: "ENTRYQUALAWARDID",
        replace: "EQA0",
      },
      {
        key: "OWNQUALID",
        replace: "OQ0",
      },
      {
        key: "QUALAWARDID",
        replace: "QA0",
      },
      {
        key: "SCSESSIONID",
        replace: "SCS0",
      },
      {
        key: "MODINSTID",
        replace: "MI0",
      },
      {
        key: "OVAID",
        replace: "OVA0",
      },
      {
        key: "STUDYLOCID",
        replace: "SL0",
      },
      {
        key: "SESSIONYEARID",
        replace: "SY0",
      },
      {
        key: "SUPALLID",
        replace: "SUP0",
      },
      {
        key: "OWNVENUEID",
        replace: "OV0",
      },
    ],
    randomize: [
      {
        key: "COURSETITLE",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
      {
        key: "MTITLE",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
      {
        key: "QUALTITLE",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
      {
        key: "THESISTITLE",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
      {
        key: "INTENDEDTHESISTITLE",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
      {
        key: "VENUENAME",
        type: "word",
        format: "adjective",
        parameters: 10,
      },
    ],
    remove: [
      "FNAMES",
      "SNAME16",
      "SURNAME",
      "PARTNERSID",
      "PARTNERNUMHUS",
      "OWNSTU",
      "OWNENGID",
    ],
  },
};
