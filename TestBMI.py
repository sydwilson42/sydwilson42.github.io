import unittest
import bmi

class TestBmi(unittest.TestCase):

    def test_bmi_15(self) -> None:
        self.assertEqual(bmi.classifyBMI(15), 'underweight')
    def test_bmi_18(self) -> None:
        self.assertEqual(bmi.classifyBMI(18.4), 'underweight')
    def test_bmi_19(self) -> None:
        self.assertEqual(bmi.classifyBMI(18.5), 'normal')
    def test_bmi_22(self) -> None:
        self.assertEqual(bmi.classifyBMI(22), 'normal')
    def test_bmi_24(self) -> None:
        self.assertEqual(bmi.classifyBMI(24), 'normal')
    def test_bmi_25(self) -> None:
        self.assertEqual(bmi.classifyBMI(25), 'overweight')
    def test_bmi_26(self) -> None:
        self.assertEqual(bmi.classifyBMI(26), 'overweight')
    def test_bmi_29(self) -> None:
        self.assertEqual(bmi.classifyBMI(29), 'overweight')
    def test_bmi_30(self) -> None:
        self.assertEqual(bmi.classifyBMI(30), 'obese')
    def test_bmi_33(self) -> None:
        self.assertEqual(bmi.classifyBMI(33), 'obese')

    def test_findbmi_74_175(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(74,175), 22.466216216216218)
    def test_findbmi_75_243(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(75,243), 30.3696)
    def test_findbmi_69_154(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(69,154), 22.73934047469019)
    def test_findbmi_65_130(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(65,130), 21.630769230769232)
    def test_findbmi_60_115(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(60,115), 22.456944444444442)
    def test_findbmi_76_254(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(76,254), 30.914473684210527)
    def test_findbmi_60_106(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(60,106), 20.699444444444442)
    def test_findbmi_71_119(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(71,119), 16.59531838920849)
    def test_findbmi_62_140(self) -> None:
        self.assertAlmostEqual(bmi.findBMI(62,140), 25.60353798126951)

if __name__ == '__main__':
    unittest.main()