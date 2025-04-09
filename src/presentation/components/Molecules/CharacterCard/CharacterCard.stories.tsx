import type { Meta, StoryObj } from '@storybook/react';
import CharacterCard from './CharacterCard';

const meta: Meta<typeof CharacterCard> = {
    title: 'Components/CharacterCard',
    component: CharacterCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCard>;

export const Default: Story = {
    args: {
        title: 'My CharacterCard',
    },
};
