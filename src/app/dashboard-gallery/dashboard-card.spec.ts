import { DashboardCard } from './dashboard-card.model';

describe('DashboardCard', () => {
  it('should create an instance', () => {
    expect(new DashboardCard({ 
      family: 'family', 
      name: 'card',
      datasource: 'datasource',
      type: 'type',
      pat: 'pat',
      image: 'image',
      resource: {},
      variables: {}

    })).toBeTruthy();
  });
});
