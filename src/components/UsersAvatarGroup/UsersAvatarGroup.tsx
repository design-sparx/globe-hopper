import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
} from '@fluentui/react-components';

const names = [
  'Johnie McConnell',
  'Allan Munger',
  'Erik Nason',
  'Kristin Patterson',
  'Daisy Phillips',
  'Carole Poland',
  'Carlos Slattery',
  'Robert Tolbert',
  'Kevin Sturgis',
  'Charlotte Waltson',
  'Elliot Woodward',
];

export const UsersAvatarGroup = () => {
  const partitionedItems = partitionAvatarGroupItems({ items: names });

  return (
    <div>
      <AvatarGroup layout="stack">
        {partitionedItems.inlineItems.map((name) => (
          <AvatarGroupItem name={name} key={name} />
        ))}
        {partitionedItems.overflowItems && (
          <AvatarGroupPopover>
            {partitionedItems.overflowItems.map((name) => (
              <AvatarGroupItem name={name} key={name} />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
    </div>
  );
};
