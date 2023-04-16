describe('Portfolio', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
  });

  it("can go to homepage", ()=>{
    cy.get('a:contains("Home")').first().click();
    cy.get('body').contains(`Hi, I’m Barath T,a Full Stack Developer.`);
  });
  it("skills page displays skills", ()=>{
    cy.get('a:contains("Skills")').first().click();
    cy.get('body').contains(`JavaScript`);
  });
  it("projects page displays projects", ()=>{
    cy.get('a:contains("Projects")').first().click();
    cy.get('body').contains(`My Personal Site`);
  });
  it("contact page displays email", ()=>{
    cy.get('a:contains("Contact")').first().click();
    cy.get('body').contains(`BarathT1207@gmail.com`);
  });
  describe('skills page', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000/skills');
    });
    it('can click on any skill to go to its page', ()=>{
      cy.get('a:contains("JavaScript")').click();
      cy.url().should('eq', 'http://localhost:3000/skills/JavaScript');
    });
  });
  describe('projects page', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000/projects');
    });
    it('can click on any skill to go to its page', ()=>{
      cy.get('a:contains("My Personal Site")').click();
      cy.url().should('eq', 'http://localhost:3000/projects/%20My%20Personal%20Site');
    });
  });
});

describe('Blog', () => {
  beforeEach(()=>{
      cy.visit('http://localhost:3000/blog')
  });
  it('blog home should display articles', ()=>{
    cy.get('body').contains('Low Level Programming using c');
    cy.get('button:contains("see more")').click();
    cy.get('body').contains('Think good Iem costs a fortune? Checkout Moondrop Chu');
  });
  it('an article can be opened', ()=>{
    cy.get('a:contains("Low Level Programming using c")').click();
    cy.url().should('eq', 'http://localhost:3000/blog/6405834ca94120b4e42ca001');
  });
  it('if not logged in, comment cannot be posted and navigated to login', ()=>{
    cy.get('a:contains("Low Level Programming using c")').click();
    cy.get('input[name="comment-field"]').type('test comment 1');
    cy.get('button:contains("post")').click();

    cy.url().should('eq', 'http://localhost:3000/blog/login');
    
  });
  it('should log in successfully', () => {
    cy.get('a[href="/blog/login"]').click();
    cy.get('input[name="username"]').type('Barath');
    cy.get('input[name="password"]').type('Barath12345@');
    cy.get('button[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/blog');
    cy.get('button.logout').click();
  });
  describe("if logged in", ()=>{
    beforeEach(()=>{
      cy.get('a[href="/blog/login"]').click();
      cy.get('input[name="username"]').type('Barath');
      cy.get('input[name="password"]').type('Barath12345@');
      cy.get('button[type="submit"]').click();
      cy.wait(1000);
    });

    it('should be able to logout successfully', ()=>{
      cy.get('button.logout').click();
      cy.wait(1000);
      cy.get('a[href="/blog/login"]');
    });

    it('post button should be available', ()=>{
      cy.get('a[href="/blog/post"]').click();
      cy.url().should('eq', 'http://localhost:3000/blog/post');
    });

    describe('in post page', ()=>{
      beforeEach(()=>{
        cy.get('a[href="/blog/post"]').click();
      });

      it('with correct data format in form fields, user should be able to post the article', ()=>{
        cy.get('input[name="title"]').type('Test title 1');
        cy.get('input[name="desc"]').type('This is test article 1');
        cy.get('input[name="image"]').selectFile('cypress/fixtures/testimg1.jpg');
        cy.get('textarea[name="content"]')
          .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis sapien non enim ultricies laoreet. Morbi ultricies, ante id volutpat hendrerit, dui nunc porta risus, eu feugiat ex neque non lacus. Suspendisse pharetra felis leo, porta venenatis sem viverra at. Donec pharetra lacus pulvinar congue rhoncus. Donec placerat dui sed placerat lacinia. Vestibulum convallis vulputate tellus et aliquam. Praesent sit amet sollicitudin augue. Donec a elit dapibus erat consequat suscipit. Suspendisse pretium nunc eget mauris imperdiet vulputate id consectetur eros. Quisque mattis nulla quis sagittis scelerisque. Ut pharetra, turpis eu aliquet sollicitudin, nulla augue egestas felis, vel egestas lectus orci eget enim. Nullam id mollis magna, id aliquam ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam dui, euismod vitae leo vel, convallis posuere lorem. In pellentesque vel sapien id sagittis. ');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        cy.visit("http://localhost:3000/blog/");

        cy.get('button:contains("see more")').click();
        cy.get('button:contains("see more")').click();
        cy.get('body').should('contain', 'Test title 1');
      });
      it('with wrong data format in form fields, user shouldn\'t be able to post the article', ()=>{
        cy.get('input[name="title"]').type('Test title 2');
        cy.get('input[name="desc"]').type('632137981848164891837');
        cy.get('input[name="image"]').selectFile('cypress/fixtures/example.json');
        cy.get('textarea[name="content"]')
          .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis sapien non enim ultricies laoreet. Morbi ultricies, ante id volutpat hendrerit, dui nunc porta risus, eu feugiat ex neque non lacus. Suspendisse pharetra felis leo, porta venenatis sem viverra at. Donec pharetra lacus pulvinar congue rhoncus. Donec placerat dui sed placerat lacinia. Vestibulum convallis vulputate tellus et aliquam. Praesent sit amet sollicitudin augue. Donec a elit dapibus erat consequat suscipit. Suspendisse pretium nunc eget mauris imperdiet vulputate id consectetur eros. Quisque mattis nulla quis sagittis scelerisque. Ut pharetra, turpis eu aliquet sollicitudin, nulla augue egestas felis, vel egestas lectus orci eget enim. Nullam id mollis magna, id aliquam ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quam dui, euismod vitae leo vel, convallis posuere lorem. In pellentesque vel sapien id sagittis. ');
        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        cy.visit("http://localhost:3000/blog/");

        cy.get('button:contains("see more")').click();
        cy.get('button:contains("see more")').click();
        cy.wait(1000);
        cy.get('body').should('not.contain', 'Test title 2');
      });
    });
    it('comment can be posted for an article', ()=>{
      cy.get('a:contains("Low Level Programming using c")').click();
      cy.get('input[name="comment-field"]').type('test comment 1');
      cy.get('button:contains("post")').click();
      
      cy.get('button:contains("post")').parent().contains('test comment 1');
    });
  });
})
