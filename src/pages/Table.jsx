import React from 'react'

export default function Table() {
    const data = [
        {
          Slno:1,
          name: 'John Doe',
          designation: 'Software Engineer',
          department: 'IT Department',
          skills: ['JavaScript', 'React', 'Node.js','HTML','MongoDB'],
          contactno: 7022430753,
          Email:'doe@gmail.com',
          address: 'Mangalore'
        },
        {
            Slno:2,
            name: 'Sarah Smith',
            designation: 'Data Scientist',
            department: 'Business Intelligence',
            skills: ['PHP', 'SQL', 'Tableau'],
            contactno:9731840940,
            Email: 'smith@gmail.com',
            address: 'Bangalore'
          },
          {
            Slno:3,
            name: 'Ryan Kim ',
            designation: 'Product Manager',
            department: 'Marketting',
            skills: ['Excel', 'Powerpoint', 'Node.js'],
            contactno:8105577483,
            Email: 'kim@gmail.com',
             address: 'Delhi  '
          },
          {
            Slno:4,
            name: 'Oliver Holmes ',
            designation: 'UI Designer',
            department: 'Design',
            skills: ['Figma', 'Sketch', 'Flutter'],
            contactno:8105577083,
            Email: 'oliver@gmail.com',
            address: 'Chennai'
          },
          {
            Slno:5,
            name: 'Emily Davis',
            designation: 'Backend Developer',
            department: 'Development',
            skills: ['Java', 'Springboot', 'Node.js'],
            contactno:8105577083, 
            Email: 'emily@gmail.com',
            address: 'Mumbai'
          }
        
        ];
      
        const tableStyle = {
        
          width: '100%',
          
        };

        const thMain={
            backgroundColor:'aqua',
            textAlign:'center',
            width:'100%',
            border: '2px solid black',
            padding: '8px'
        };
      
        const thStyle = {
            backgroundColor: 'maroon',
            border: '2px solid black',
            padding: '8px',
            textAlign: 'center',
            color:'white'
          };
        
          const tdStyle = {
            border: '2px solid black',
            padding: '8px',
            backgroundColor:'pink'
          };
        
    
  return (
    <div>
       <table style={tableStyle}>
       <tr>
            <th style={thMain} colSpan={8}>Employee Information</th>
        </tr>
      
        <tr>
        <th style={thStyle}>Slno</th>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Designation</th>
          <th style={thStyle}>Department</th>
          <th style={thStyle}>Skills</th>
          <th style={thStyle}>Contact</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Address</th>
        </tr>
      
      
      {data.map(({ Slno,name, designation, department, skills, contactno,Email,address }, index) => (
          <tr key={index}>
            <td style={tdStyle}>{Slno}</td>
            <td style={tdStyle}>{name}</td>
            <td style={tdStyle}>{designation}</td>
            <td style={tdStyle}>{department}</td>
            <td style={tdStyle}>{skills.join(', ')}</td>
            <td style={tdStyle}>{contactno}</td>
            <td style={tdStyle}>{Email}</td>
            <td style={tdStyle}>{address}</td>
          </tr>
        ))}
      
    </table>

    </div>
  )
}
