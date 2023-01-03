import React from 'react';
import { render, screen } from '@testing-library/react';
import * as api from './name-api';
import { NameCollection } from './name-collection';

describe('NameCollection component specs', () => {
  it('should display a list with one item when it mounts the component and it resolves the async call', async () => {
    // Arrange
    const names = ['John Doe'];
    const stub = jest.spyOn(api, 'getNameCollection').mockResolvedValue(names);

    // Act
    render(<NameCollection />);

    const itemsBeforeWait = screen.getAllByRole('listitem');
    expect(itemsBeforeWait).toHaveLength(0);

    const items = await screen.findAllByRole('listitem');

    // Assert
    expect(items).toHaveLength(1);
    expect(stub).toHaveBeenCalled();
  });
});
