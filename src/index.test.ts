import { renderHook, act } from '@testing-library/react-hooks';
import { useIntervalTime } from './index';

test( 'useIntervalTime', () => {
    jest.useFakeTimers();
    const { result } = renderHook< void, Date >(() => useIntervalTime());
    const time = result.current;
    console.log( time );

    act(() => {
        jest.advanceTimersByTime( 1000 );
    });

    const nextTime = result.current;
    expect( nextTime.getTime() - time.getTime()).toBe( 1000 );

    jest.useRealTimers();
})