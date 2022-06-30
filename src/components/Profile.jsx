import p from './Profile.module.css';

const Profile = () => {
  return (
    <div className={p.main}>
        <div>
          <img className={p.profileImg} src='https://million-wallpapers.ru/wallpapers/4/41/538223969968184/matrica-nasyshhennyj-zelenyj-dizajn.jpg'/>
        </div>
        <div>
          <img className={p.profileImage} src='https://i.pinimg.com/236x/3e/50/e1/3e50e1f226cbdead2bf5aef838f06eaa.jpg?nii=t://million-wallpapers.ru/wallpapers/4/41/538223969968184/matrica-nasyshhennyj-zelenyj-dizajn.jpg'/>
        </div>
        <div>
          My post
        </div>
        <div>
          New post
        </div>
        <div className='posts'>
          <div className={p.item}>
              post1
            </div>
            <div>
              post2
            </div>
        </div>
          
      </div>
  );
}

export default Profile;