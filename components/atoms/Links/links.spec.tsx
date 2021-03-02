import React from 'react';
import {render, screen} from 'test-utils'
import Link from './index';


describe('<Link />', async () => {

        const Component = () => {
            return (
                <Link size="1" colour="fff" w="100">
                    Hello
                </Link>
            )
        }
    test('should Render without issues', () => {
        render(<Component />)
        screen.debug()
        expect(screen.getAllByText(/Hello/)).toBeTruthy()
    })
    
})  
