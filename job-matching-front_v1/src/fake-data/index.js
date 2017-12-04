export const initFakeData = {
  username: 'ahihi',
  password: '##df@14fssah$f4',
  role: {
    id: 2,
    value: 'CANDIDATE'
  },
  person: {
    personId: 1,
    personCode: '5130330A',
    firstName: 'Ahihi',
    lastName: 'Ahoho',
    phoneNumber: '0123456789',
    email: 'ahihi@troll.com',
    imageSource: '????',
    dateOfBirth: '11/11/2011',
    address: 'TP.HCM, Vietnam',
    companyName: 'none',
    companyPosition: 'none',
    parentNotes: [
      {
        parentId: 1,
        title: 'objective',
        parentType: {
          parentTypeid: 1,
          parentTypeValue: 'non-time'
        },
        childNotes: [
          {
            childId: 1,
            title: 'Current',
            startDate: 'none',
            endDate: 'none',
            value: '- I hate my job and I want to find new job.\nAhuhu',
          },
          {
            childId: 2,
            title: 'Future',
            startDate: 'none',
            endDate: 'none',
            value: '- Yolo yolo yolo.\nAhuhu',
          }
        ],
      },
      {
        parentId: 2,
        title: 'experience',
        parentType: {
          parentTypeid: 1,
          parentTypeValue: 'time'
        },
        childNotes: [
          {
            childId: 3,
            title: 'Sleeping',
            startDate: 'borned',
            endDate: 'present',
            value: '- Sleep 8 hour per day \n- Can take a snap 3 hour.',
          },
          {
            childId: 4,
            title: 'Eating',
            startDate: 'borned',
            endDate: 'present',
            value: '- Can eat a lot.\n- Sleep after eat.',
          }
        ],
      }
    ],
  }
};