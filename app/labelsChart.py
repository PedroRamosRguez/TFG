def labels(datos):
    labelsChart = []
    for i,v in enumerate(datos):
         '''print i
         print v
         print v.keys()'''
         listValues = []
         for ii,vv in sorted(v.iteritems()):
            #print ii,
            #print vv
            for iii,vvv in sorted(vv.iteritems()):
                #print iii
                #print vvv
                listValues.append(str(iii))
    labelsChart= listValues
    return labelsChart