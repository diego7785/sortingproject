describe('Testing sorting algorithms', () => {

    beforeEach(() => {
        cy.fixture('arrays.json').as('arrays')
        cy.visit('/')
    })

    it('Testing merge sort', () => {
        cy.get('@arrays').then(arrays => {
            cy.get('#array').type(arrays.array)
            cy.get('.footer > :nth-child(1)').click()
            cy.wait(13000)
            cy.get('.header')
            cy.contains('¡Array sorted!')
            //cy.contains(arrays.sorted).should('be.visible')
            cy.get('#result').should('have.value', arrays.sorted)
            cy.get('button').click()
        })
    })

    it('Testing quick sort', () => {
        cy.get('@arrays').then(arrays => {
            cy.get('#array').type(arrays.array)
            cy.get('.footer > :nth-child(2)').click()
            cy.wait(13000)
            cy.get('.header')
            cy.contains('¡Array sorted!')
            //cy.contains(arrays.sorted).should('be.visible')
            cy.get('#result').should('have.value', arrays.sorted)
            cy.get('button').click()

        })
    })

    it('Testing bubble sort', () => {
        cy.get('@arrays').then(arrays => {
            cy.get('#array').type(arrays.array)
            cy.get('.footer > :nth-child(3)').click()
            cy.wait(15000)
            cy.get('.header')
            cy.contains('¡Array sorted!')
            //cy.contains(arrays.sorted).should('be.visible')
            cy.get('#result').should('have.value', arrays.sorted)
            cy.get('button').click()

        })
    })

    it('Testing selection sort', () => {
        cy.get('@arrays').then(arrays => {
            cy.get('#array').type(arrays.array)
            cy.get('.footer > :nth-child(4)').click()
            cy.wait(15000)
            cy.get('.header')
            cy.contains('¡Array sorted!')
            //cy.contains(arrays.sorted).should('be.visible')
            cy.get('#result').should('have.value', arrays.sorted)
            cy.get('button').click()    

        })
    })
})