import { spacing } from 'utils/typography';

const marginSpacing = ({ mb, ml, mr, mt }) => ({
  ...(!isNaN(mb) && { marginBottom: spacing.get(mb) }),
  ...(!isNaN(ml) && { marginLeft: spacing.get(ml) }),
  ...(!isNaN(mr) && { marginRight: spacing.get(mr) }),
  ...(!isNaN(mt) && { marginTop: spacing.get(mt) }),
});

export default marginSpacing;
