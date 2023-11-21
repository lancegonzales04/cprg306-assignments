import Link from 'next/link'
import StudentInfo from './StudentInfo'
import React from 'react';

export default function Home() {
  return (
    <main>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      
      <StudentInfo/>
      { /* this calls the other page to print on this page*/ }

      <div style={{ backgroundColor: 'orange', marginRight: '1355px',  marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
        <Link href= "/week2"> Week 2 </Link>
      </div>
      
      <div style={{ backgroundColor: 'coral', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week3"> Week 3 </Link> </p>
      </div>
      
      <div style={{ backgroundColor: 'orange', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week4"> Week 4 </Link> </p>
      </div>
      
      <div style={{ backgroundColor: 'coral', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week5"> Week 5 </Link> </p>
      </div>

      <div style={{ backgroundColor: 'orange', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week6"> Week 6 </Link> </p>
      </div>

      <div style={{ backgroundColor: 'orange', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week7"> Week 7 </Link> </p>
      </div>
    
      <div style={{ backgroundColor: 'orange', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week8"> Week 8 </Link> </p>
      </div>

      <div style={{ backgroundColor: 'orange', marginRight: '1355px', marginBottom: '20px', marginTop: '20px', padding: '20px 35px', borderRadius: '20px' }}>
      <p> <Link href= "/week10"> Week 10 </Link> </p>
      </div>
    </main>
  );
}
