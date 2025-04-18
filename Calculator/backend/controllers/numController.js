import { fetchNumbers } from '../services/numServices.js';
import { getWindowState, updateWindow } from '../utils/window.js';

export const getNumbers = async (req, res) => {
  const { numberid } = req.params;
  const validTypes = ['p', 'f', 'e', 'r'];

  if (!validTypes.includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const windowPrevState = getWindowState();

  try {
    const result = await Promise.race([
      fetchNumbers(numberid),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), 500)
      ),
    ]);

    if (!result || !result.numbers) {
      return res.json({
        windowPrevState,
        windowCurrState: windowPrevState,
        numbers: windowPrevState,
        avg: average(windowPrevState),
      });
    }

    const updatedWindow = updateWindow(result.numbers);

    return res.json({
      windowPrevState,
      windowCurrState: updatedWindow,
      numbers: updatedWindow,
      avg: average(updatedWindow),
    });
  } catch (error) {
    return res.json({
      windowPrevState,
      windowCurrState: windowPrevState,
      numbers: windowPrevState,
      avg: average(windowPrevState),
    });
  }
};

const average = (arr) => {
  if (!arr.length) return 0;
  const avg = arr.reduce((sum, val) => sum + val, 0) / arr.length;
  return parseFloat(avg.toFixed(2));
};
