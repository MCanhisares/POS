import {
  calculateDiscounts,
  calculateOrderSummary,
  calculateTaxes,
} from '@logic/orderLogic';

describe('Order Logic tests', () => {
  it('Does not allow for a negative total', () => {
    const summary = calculateOrderSummary(
      [],
      [
        {
          name: '$ 5.00',
          price: -5,
          type: 'flat',
        },
      ],
      []
    );
    expect(summary.finalTotal).toBeGreaterThanOrEqual(0);
  });

  it('Only applies percent discounts when subtotal is greater than 0 after discounts', () => {
    const noPercent = calculateDiscounts(5, [
      {
        name: '$ 5.00',
        price: -5,
        type: 'flat',
      },
      {
        name: '10%',
        price: -0.1,
        type: 'percent',
      },
    ]);
    const withPercent = calculateDiscounts(6, [
      {
        name: '$ 5.00',
        price: -5,
        type: 'flat',
      },
      {
        name: '10%',
        price: -0.1,
        type: 'percent',
      },
    ]);    
    expect(noPercent).toBe(5);
    expect(withPercent).toBe(5.1);
  });

  it('Applies taxes to all items if no category specified', () => {
    const wrongCategory = calculateTaxes(
      [
        {
          category: 'Alcohol',
          name: 'Beer',
          price: 5.0,
        },
      ],
      [
        {
          price: 0.1,
          category: 'meal',
        },
      ]
    );
    const noCategory = calculateTaxes(
      [
        {
          category: 'alcohol',
          name: 'Beer',
          price: 5.0,
        },
      ],
      [
        {
          price: 0.1,
          category: undefined,
        },
      ]
    );
    expect(wrongCategory).toBe(0);
    expect(noCategory).toBe(0.5);
  });

  it('Checks for category to apply tax', () => {
    const noAlcoholTaxes = calculateTaxes(
      [
        {
          category: 'Alcohol',
          name: 'Beer',
          price: 5.0,
        },
      ],
      [
        {
          price: 0.1,
          category: 'meal',
        },
      ]
    );
    const alcoholTaxes = calculateTaxes(
      [
        {
          category: 'alcohol',
          name: 'Beer',
          price: 5.0,
        },
      ],
      [
        {
          price: 0.1,
          category: 'alcohol',
        },
      ]
    );
    expect(noAlcoholTaxes).not.toEqual(alcoholTaxes);
    expect(noAlcoholTaxes).toBe(0);
    expect(alcoholTaxes).toBe(0.5);
  });
});
