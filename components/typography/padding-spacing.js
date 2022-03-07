import { spacing } from 'utils/typography';

const paddingSpacing = ({ pb, pl, pr, pt }) => ({
  ...(!isNaN(pb) && { paddingBottom: spacing.get(pb) }),
  ...(!isNaN(pl) && { paddingLeft: spacing.get(pl) }),
  ...(!isNaN(pr) && { paddingRight: spacing.get(pr) }),
  ...(!isNaN(pt) && { paddingTop: spacing.get(pt) }),
});

export default paddingSpacing;
