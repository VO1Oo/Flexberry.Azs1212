﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Azs1212
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состав.
    /// </summary>
    // *** Start programmer edit section *** (Состав CustomAttributes)

    // *** End programmer edit section *** (Состав CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СоставE", new string[0])]
    public class Состав : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Azs1212.Пистолет fПистолет;
        
        private IIS.Azs1212.Колонка fКолонка;
        
        // *** Start programmer edit section *** (Состав CustomMembers)

        // *** End programmer edit section *** (Состав CustomMembers)

        
        /// <summary>
        /// Состав.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Пистолет CustomAttributes)

        // *** End programmer edit section *** (Состав.Пистолет CustomAttributes)
        [PropertyStorage(new string[] {
                "Пистолет"})]
        [NotNull()]
        public virtual IIS.Azs1212.Пистолет Пистолет
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Пистолет Get start)

                // *** End programmer edit section *** (Состав.Пистолет Get start)
                IIS.Azs1212.Пистолет result = this.fПистолет;
                // *** Start programmer edit section *** (Состав.Пистолет Get end)

                // *** End programmer edit section *** (Состав.Пистолет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Пистолет Set start)

                // *** End programmer edit section *** (Состав.Пистолет Set start)
                this.fПистолет = value;
                // *** Start programmer edit section *** (Состав.Пистолет Set end)

                // *** End programmer edit section *** (Состав.Пистолет Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Azs1212.Колонка.
        /// </summary>
        // *** Start programmer edit section *** (Состав.Колонка CustomAttributes)

        // *** End programmer edit section *** (Состав.Колонка CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Колонка"})]
        public virtual IIS.Azs1212.Колонка Колонка
        {
            get
            {
                // *** Start programmer edit section *** (Состав.Колонка Get start)

                // *** End programmer edit section *** (Состав.Колонка Get start)
                IIS.Azs1212.Колонка result = this.fКолонка;
                // *** Start programmer edit section *** (Состав.Колонка Get end)

                // *** End programmer edit section *** (Состав.Колонка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Состав.Колонка Set start)

                // *** End programmer edit section *** (Состав.Колонка Set start)
                this.fКолонка = value;
                // *** Start programmer edit section *** (Состав.Колонка Set end)

                // *** End programmer edit section *** (Состав.Колонка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СоставE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СоставE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СоставE", typeof(IIS.Azs1212.Состав));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Состав.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСостав CustomAttributes)
    public class DetailArrayOfСостав : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Azs1212.DetailArrayOfСостав members)

        // *** End programmer edit section *** (IIS.Azs1212.DetailArrayOfСостав members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Состав by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Состав.
        /// </summary>
        public DetailArrayOfСостав(IIS.Azs1212.Колонка fКолонка) : 
                base(typeof(Состав), ((ICSSoft.STORMNET.DataObject)(fКолонка)))
        {
        }
        
        public IIS.Azs1212.Состав this[int index]
        {
            get
            {
                return ((IIS.Azs1212.Состав)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Azs1212.Состав dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
