import data from "../../submissionData.json";
// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let def1 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
  },
];

const deb1 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
  },
];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it(`default should work correctly`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("Ku");
      cy.get("#query").should("have.value", "Ku");

      cy.get("#default").should("have.text", "Ku");

      cy.tick(200);
      cy.get("#default").should("have.text", "Ku");

      cy.tick(200);
      cy.get("#default").should("have.text", "Ku");

      cy.tick(100);
      cy.get("#default").should("have.text", "Ku");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`debouncing should work correctly with the delay`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("Masai School");
      cy.get("#query").should("have.value", "Masai School");

      cy.get("#debounce").should("be.empty");

      cy.tick(200);
      cy.get("#debounce").should("be.empty");

      cy.tick(200);
      cy.get("#debounce").should("be.empty");

      cy.tick(100);
      cy.get("#debounce").should("have.text", "Masai School");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`throttling should work correctly with the delay`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("Masai Schoo");
      cy.get("#query").should("have.value", "Masai Schoo");

      cy.get("#throttle").should("have.text", "M");

      cy.tick(200);
      cy.get("#throttle").should("have.text", "M");

      cy.tick(200);
      cy.get("#throttle").should("have.text", "M");

      cy.tick(100);
      cy.get("#query").type("l");

      cy.get("#throttle").should("have.text", "Masai School");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`check default fetch request`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("nn");
      cy.get("#debounce").should("be.empty");
      cy.tick(200);
      cy.get("#debounce").should("be.empty");
      cy.tick(200);
      cy.get("#debounce").should("be.empty");
      cy.tick(100);
      cy.get("#debounce").should("have.text", "nn");
      cy.get("#DefaulttableRow").children().should("have.length", 3);
      cy.get("#DefaulttableRow")
        .children()
        .each((elem, index) => {
          expect(elem.text()).to.include(def1[index].id);
          expect(elem.text()).to.include(def1[index].name);
          expect(elem.text()).to.include(def1[index].username);
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`check debounce fetch request`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("Le");
      cy.get("#debounce").should("be.empty");

      cy.tick(200);
      cy.get("#debounce").should("be.empty");

      cy.tick(200);
      cy.get("#debounce").should("be.empty");

      cy.tick(100);
      cy.get("#debounce").should("have.text", "Le");
      cy.get("#DebouncetableRow").children().should("have.length", 5);
      cy.get("#DebouncetableRow")
        .children()
        .each((elem, index) => {
          expect(elem.text()).to.include(deb1[index].id);
          expect(elem.text()).to.include(deb1[index].name);
          expect(elem.text()).to.include(deb1[index].username);
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`check throttle fetch request`, () => {
      cy.clock();
      cy.visit(url);
      cy.get("#query").clear().type("Clementin");
      cy.get("#throttle").should("have.text", "C");

      cy.tick(200);
      cy.get("#throttle").should("have.text", "C");

      cy.tick(200);
      cy.get("#throttle").should("have.text", "C");

      cy.tick(100);
      cy.get("#query").type("e");
      cy.get("#throttle").should("have.text", "Clementine");
       cy.get("#ThrotteltableRow").children().should("have.length", 1);
      cy.get("#ThrotteltableRow")
        .children()
        .each((elem, index) => {
          expect(elem.text()).to.include(3);
          expect(elem.text()).to.include("Clementine Bauch");
          expect(elem.text()).to.include("Samantha");
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
