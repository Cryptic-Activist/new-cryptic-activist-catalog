import { map } from 'nanostores';
import { AppState, AppStateSetter } from './types';

export const $app = map<AppState>({
  defaults: {
    cryptocurrency: null,
    fiat: null,
  },
  dimensions: [0, 0],
  isMobile: false,
  type: 'buy',
  warning: [],
});

const setter = ({
  defaults,
  dimensions,
  isMobile,
  type,
  warnings,
}: AppStateSetter) => {
  const app = $app.get();

  const localDefaults = {
    fiat: defaults?.fiat ?? app.defaults.fiat,
    cryptocurrency: defaults?.cryptocurrency ?? app.defaults.cryptocurrency,
  };
  const localDimensions = dimensions ?? app.dimensions;
  const localIsMobile = isMobile ?? app.isMobile;
  const localType = type ?? app.type;
  const localWarnings = warnings ?? app.warning;

  $app.set({
    defaults: localDefaults,
    dimensions: localDimensions,
    isMobile: localIsMobile,
    type: localType,
    warning: localWarnings,
  });
};
